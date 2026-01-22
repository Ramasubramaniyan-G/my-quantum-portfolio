export const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const fragmentShaderSource = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  
  // Pseudo-random function
  float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
  
  // Noise function
  float noise(vec2 x) {
    vec2 i = floor(x);
    vec2 f = fract(x);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  
  // Fractal Brownian Motion
  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    
    float t = time * 0.15;
    
    // Mouse influence
    vec2 m = mouse / resolution.xy;
    float dist = distance(uv, m);
    float interaction = smoothstep(0.4, 0.0, dist) * 0.5;
    
    // Quantum field effect
    float q = fbm(p + t * 0.5);
    float r = fbm(p + q + t * 0.2 + interaction);
    
    vec3 color = mix(
      vec3(0.02, 0.02, 0.05), // Deep space
      vec3(0.0, 0.8, 0.9),    // Cyan glow
      clamp(r * r * 1.2, 0.0, 1.0)
    );
    
    // Add neon purple pulse
    float pulse = sin(time + length(p) * 5.0) * 0.5 + 0.5;
    color += vec3(0.6, 0.0, 0.9) * pulse * 0.2 * (1.0 - length(p));
    
    // Vignette
    float vig = 1.0 - length(uv - 0.5) * 1.5;
    color *= vig;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;
