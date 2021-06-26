
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

function ResultsShowScreen ({route, navigation}) {

  const [result, setResult] = useState(null);
  const {id} = route.params

  //console.log(result);

  const getResult = async (id) => {
     const response = await yelp.get(`/${id}`);
     //console.log(response.data)
     setResult(response.data);
   };

   useEffect(()=>{
     getResult(id);
   }, []);


   if (!result) {
     return null;
   }

   console.log(result)

  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={styles.restaurantInfo}>{result.display_phone}</Text>
      <Text style={styles.restaurantInfo}>{result.location.display_address}</Text>
      <Text style={styles.restaurantInfo}>Price: {result.price} Rating: {result.rating}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem = {({item}) => {
          return <Image style={styles.image} source = {{ uri: item}} />
        }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  restaurantInfo:{
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    height: 200,
    width: 300,
    marginLeft: 15,
    marginBottom: 5,
    borderRadius: 4,
  }
})
