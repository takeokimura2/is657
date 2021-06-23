import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function SearchBar () {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        style = {styles.inputStyle} 
        placeholder = "Search"
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  marginTop: 10,
  backgroundStyle: {backgroundColor: '#F0EEEE',
  height: 50,
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }

})
