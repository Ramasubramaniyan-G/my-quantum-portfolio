import { useState, useRef } from 'react';

export const useAmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (isPlaying) {
      oscillators.current.forEach(osc => osc.stop());
      oscillators.current = [];
      audioContext.current?.close();
      audioContext.current = null;
      setIsPlaying(false);
    } else {
      const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
      audioContext.current = new AudioContext();

      const createOsc = (freq: number, type: OscillatorType, vol: number, pan: number) => {
        if (!audioContext.current) return null;
        const osc = audioContext.current.createOscillator();
        const gain = audioContext.current.createGain();
        const panner = audioContext.current.createStereoPanner();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioContext.current.currentTime);
        gain.gain.setValueAtTime(vol, audioContext.current.currentTime);
        panner.pan.setValueAtTime(pan, audioContext.current.currentTime);

        osc.connect(gain);
        gain.connect(panner);
        panner.connect(audioContext.current.destination);
        osc.start();
        return osc;
      };

      const osc1 = createOsc(130.81, 'sine', 0.05, -0.5);
      const osc2 = createOsc(155.56, 'sine', 0.03, 0.5);
      const osc3 = createOsc(196.00, 'triangle', 0.02, 0);

      if (osc1) oscillators.current.push(osc1);
      if (osc2) oscillators.current.push(osc2);
      if (osc3) oscillators.current.push(osc3);

      setIsPlaying(true);
    }
  };

  return { isPlaying, toggleSound };
};
