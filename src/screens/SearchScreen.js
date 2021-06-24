import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

function SearchScreen () {

  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)}
        onTermSubmit ={()=> console.log('term was submitted')}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
