import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    bannerData:[],
    imageUrl:"",
    nowPlayingData:[],
    popularData:[],
    topRatedData:[],
    upcomingData:[],
    ontheairData:[],
    popularTvData:[],
    topRatedTvData:[],
    moviflixDetailData:[],
}

export const moviflixSlice=createSlice({
    name:'moviflix',
    initialState,
    reducers:{
        setBannerData:(state,action)=>{
            state.bannerData=action.payload
        },
        setImageURL:(state,action)=>{
            state.imageUrl=action.payload
        },
        setNowPlayingData:(state,action)=>{
            state.nowPlayingData=action.payload
        },
        setPopularData:(state,action)=>{
            state.popularData=action.payload
        },
        setTopRatedData:(state,action)=>{
            state.topRatedData=action.payload
        },
        setUpcomingData:(state,action)=>{
            state.upcomingData=action.payload
        },
        setOnTheAirData:(state,action)=>{
            state.ontheairData=action.payload
        },
        setPopularTvData:(state,action)=>{
            state.popularTvData=action.payload
        },
        setTopRatedTvData:(state,action)=>{
            state.topRatedTvData=action.payload
        },
        setMoviflixDetailData:(state,action)=>{
            state.moviflixDetailData=action.payload
        }
    }
})

export const {setBannerData,setImageURL,setNowPlayingData,setPopularData,setTopRatedData,
    setUpcomingData,setOnTheAirData,setPopularTvData,setTopRatedTvData,
setMoviflixDetailData}=moviflixSlice.actions;
export default moviflixSlice.reducer;