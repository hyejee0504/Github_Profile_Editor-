
import { useState } from 'react';


function useCopyClipBoard() {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
        alert("복사가 완료되었습니다")
      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
}

export default useCopyClipBoard;


