"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
 
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths.`;
 
function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
export default TextGenerateEffectDemo