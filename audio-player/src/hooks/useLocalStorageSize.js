import { useState, useEffect } from "react";

function useLocalStorageSize() {
  const [totalSpace, setTotalSpace] = useState(0);
  const [usedSpace, setUsedSpace] = useState(0);

  useEffect(() => {
    const calculateLocalStorageSize = () => {
      const localStorageSize = JSON.stringify(localStorage).length;
      const totalSpace = 5 * 1024 * 1024; // 5 MB (typical limit for most browsers)
      const usedSpace = localStorageSize;

    //   setTotalSpace(parseFloat((totalSpace / (1024 * 1024)).toFixed(2)));
    //   setUsedSpace(parseFloat((usedSpace / (1024 * 1024)).toFixed(2)));
    setTotalSpace(parseFloat(totalSpace / (1024 * 1024)));
      setUsedSpace(parseFloat(usedSpace / (1024 * 1024)));
      
    };

    calculateLocalStorageSize();

  }, [JSON.stringify(localStorage).length]);

  const remainingSpace = totalSpace - usedSpace;

  return {
    totalSpace,
    usedSpace,
    remainingSpace,
  };
}

export default useLocalStorageSize;
