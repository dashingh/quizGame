import { useState } from "react";
import { usePrompt } from "./prompt.blocker";




const useHandleBack = (message:string) => {
  const [isDirty, setIsDirty] = useState(false);
  usePrompt(message, isDirty);
  return { setIsDirty, isDirty };
};

export default useHandleBack;
