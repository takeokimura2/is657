import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 7ZxCmQPGdbR_-Aldfiv4RSPjoIxDf7XKZsmcq217-s_U1HBmIbLlYBrek8QTb4LuXLMbutnuDJ7D3jchHmwtTTUsqCsyFwr0qcroZebKN6VfywiylY6GA_iXs2rRYHYx'
  }
});