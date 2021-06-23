import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function SearchBar () {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30}/>
      <Text>Search Bar</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {backgroundColor: '#F0EEEE',
  height: 50,
  borderRadius: 5,
  marginHorizontal: 15
}
})
