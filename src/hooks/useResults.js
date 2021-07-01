import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default  () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm, searchLocation) => {
    try {
    const response = await yelp.get('/search',
    { params: {
      limit:50,
      term: searchTerm,
      location: searchLocation
    }});
    setResults(response.data.businesses);
    console.log(response.data.businesses)
  } catch (err){ 
  setErrorMessage(err)
  
  }} 

useEffect(() => {
  searchApi('pasta');

}, [])



return [searchApi, results, errorMessage];

};