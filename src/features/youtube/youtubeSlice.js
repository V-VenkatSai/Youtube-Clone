import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos : [],
  currentPlaying : null,
  searchTerm : "",
  searchResults : [],
  nextPageToken : null,
  recommendedVideo : []
}

const youtubeSlice = createSlice({
  name:'youtubeApp',
  initialState,
  reducer:{

  }
})

export default youtubeSlice;