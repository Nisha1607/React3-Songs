import {combineReducers} from 'redux';


//creating reducers
// { selectSong } = require("../actions");

// reducers 1: static list of songs

const songsReducer = () =>{
    return [
        {title: 'makhana' ,duration : '4:04' },
        {title: 'titli' ,duration : '5:04' },
        {title: 'omshantiom' ,duration : '3:04' },
        {title: 'batamizdil' ,duration : '1:04' },

    ];
};

//reducer 2: for selecting song

const seletedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

//combining reducers

export default combineReducers({
    songs : songsReducer,
    selectedSong: seletedSongReducer
});