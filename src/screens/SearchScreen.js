import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import LocationSearchBar from '../components/LocationSearchBar';

function SearchScreen ({navigation}) {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()
  const [location, setLocation] = useState('Long Beach')

  //console.log(results)

  function filterResultsByPrice (price) {
    // price ==='$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  };

  useEffect(()=>{
    setLocation('Long Beach');
    searchApi(term, location);
  }, []);

  return (
    <>
      <LocationSearchBar 
        location = {location} 
        onLocationChange = {newLocation => setLocation(newLocation)}
      
      />
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)}
      
      />
      <Button
        onPress = {()=> searchApi(term, location)}
        color="blue"
        title = "Search"
        style = {styles.buttonStyle}
      />

      {errorMessage ? <Text>{errorMessage.message}</Text> : null}
      
      <ScrollView>
        <ResultsList 
          results = {filterResultsByPrice('$')} 
          title="Cost Effective"
          navigation={navigation} 
        />
        <ResultsList 
          results = {filterResultsByPrice('$$')} 
          title="Bit Pricier"
          navigation={navigation} 
        />
        <ResultsList 
          results = {filterResultsByPrice('$$$')} 
          title="Big Spender"
          navigation={navigation} 
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  buttonStyle:{
    borderWidth: 1,
    backgroundColor: 'blue',
    fontWeight: 'bold'
  }
})
