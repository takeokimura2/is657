import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

function SearchScreen () {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
    const response = await yelp.get('/search',
    { params: {
      limit:50,
      term: searchTerm,
      location: 'san jose'
    }});
    setResults(response.data.businesses);
} catch (err){ 
  setErrorMessage('Something went wrong')
}} 

  return (
    <View>
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)}
        onTermSubmit ={()=> searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
