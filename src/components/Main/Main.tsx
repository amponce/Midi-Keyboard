import React, { FunctionComponent } from "react";
import { KeyboardWithInstrument } from "../Keyboard";
import { NoAudio } from "../NoAudio";
import { useAudioContext } from "../AudioContextProvider";

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudio />;
};
