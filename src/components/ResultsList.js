import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

function ResultsList ({title, results}) {
  return (
    <View>
      <Text style = {styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal={true}
        data={results}
        keyExtractor = {(result) => result.id}
        renderItem = {({item}) => {
          return <Text>{item.name}</Text>     
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'

  }
})
