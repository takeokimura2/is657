import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function SearchBar ({term, onTermChange}) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style = {styles.inputStyle} 
        placeholder = "What do you want to eat?"
        value = {term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  
  backgroundStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F0EEEE',
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
