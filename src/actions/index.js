//Action creator

export const selectSong=(song)=>{
    //return a action
    return{
        type:'SONG_SELECTED',
        payload: song
    };
};

