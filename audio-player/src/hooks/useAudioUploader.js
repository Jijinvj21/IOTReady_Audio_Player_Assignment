function useAudioUploader() {
  const uploadAudioToLocalStorage = (audioData) => {
    console.log(audioData);

    try {
      let oldData = JSON.parse(localStorage.getItem("music")) || [];
      let newData = [...oldData, audioData];
      
      localStorage.setItem("music", JSON.stringify(newData));
      console.log("Data stored:", newData);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        throw new Error("Failed to store data: Storage quota exceeded");
      } else {
        throw new Error("Failed to store data in local storage");
      }
    }
  };

  return {
    uploadAudioToLocalStorage,
  };
}

export default useAudioUploader;
