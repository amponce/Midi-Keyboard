/// <reference types="react-scripts" />

type SoundfontType = typeof Soundfont;
type AudioContextType = typeof AudioContext;

interface window extends Window {
  webkitAudioContext: AudioContextType;
}
