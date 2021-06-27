import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function LocationSearchBar () {
  return (
    <View style={styles.backgroundColor}>
      <TextInput 
        style = {styles.inputStyle}
        placeholder = "Los Angeles"
       />
    </View>
  )
}

export default LocationSearchBar

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
})
