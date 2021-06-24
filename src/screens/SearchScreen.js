import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

function SearchScreen ({navigation}) {

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
    <>
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)}
        onTermSubmit ={()=> searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList 
          results = {filterResultsByPrice('$')} 
          title="Cost Effective" 
          navigation ={navigation}
        />
        <ResultsList 
          results = {filterResultsByPrice('$$')} 
          title="Bit Pricier"
          navigation ={navigation}
        />
        <ResultsList 
          results = {filterResultsByPrice('$$$')} 
          title="Big Spender" 
          navigation ={navigation} 
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
