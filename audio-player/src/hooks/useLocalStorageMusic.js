import { useContext, useEffect } from 'react';
import { AudioContext } from '../components/ContextProvider/ContextProvider';

const useLocalStorageMusic = () => {
    const { setPlaylist } = useContext(AudioContext);

    useEffect(() => {
        const musicFromLocalStorage = JSON.parse(localStorage.getItem('music')) || [];
        console.log(musicFromLocalStorage)
        setPlaylist(musicFromLocalStorage);
    }, [setPlaylist]);

    // return musicFromLocalStorage; 
};

export default useLocalStorageMusic;
