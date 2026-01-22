import React, { useRef, useEffect } from 'react';
import { vertexShaderSource, fragmentShaderSource } from '@/lib/webgl';

export const WebGLBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Get Context
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    let program: WebGLProgram | null = null;
    let positionAttributeLocation: number;
    let timeUniformLocation: WebGLUniformLocation | null;
    let resolutionUniformLocation: WebGLUniformLocation | null;
    let mouseUniformLocation: WebGLUniformLocation | null;
    let buffer: WebGLBuffer | null;

    // 2. Helpers
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
      const prog = gl.createProgram();
      if (!prog) return null;
      gl.attachShader(prog, vertexShader);
      gl.attachShader(prog, fragmentShader);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(prog));
        gl.deleteProgram(prog);
        return null;
      }
      return prog;
    };

    // 3. Init
    const init = () => {
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
      if (!vertexShader || !fragmentShader) return;

      program = createProgram(gl, vertexShader, fragmentShader);
      if (!program) return;

      positionAttributeLocation = gl.getAttribLocation(program, "position");
      timeUniformLocation = gl.getUniformLocation(program, "time");
      resolutionUniformLocation = gl.getUniformLocation(program, "resolution");
      mouseUniformLocation = gl.getUniformLocation(program, "mouse");

      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );
    };

    init();

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = canvas.height - e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      // Handle High DPI
      const realToCSSPixels = window.devicePixelRatio;
      const displayWidth = Math.floor(window.innerWidth * realToCSSPixels);
      const displayHeight = Math.floor(window.innerHeight * realToCSSPixels);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    // 4. Render Loop
    const render = (time: number) => {
      if (!program || !gl) return;
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseUniformLocation, mouseX * window.devicePixelRatio, mouseY * window.devicePixelRatio);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    // Start Loop
    animationFrameIdRef.current = requestAnimationFrame(render);

    // 5. Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />;
};