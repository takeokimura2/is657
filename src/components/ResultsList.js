import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

function ResultsList ({title, results, navigation}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor = {(result) => result.id}
        renderItem = {({item}) => {
          return (
            <TouchableOpacity onPress ={() => navigation.navigate('ResultsShow')}>
              <ResultsDetail result={item} />
            </TouchableOpacity>  
            
          )     
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10
  }
})
