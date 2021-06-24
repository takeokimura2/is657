import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

function SearchScreen () {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()

  console.log(results)

  function filterResultsByPrice (price) {
    // price ==='$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View>
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)}
        onTermSubmit ={()=> searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ResultsList results = {filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results = {filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results = {filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
