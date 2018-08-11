import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions, TextInput } from 'react-native';

import ImageElement from './app/components/ImageElement'
import { validate } from './node_modules/jsonschema';

export default class App extends React.Component {
  state = {
    images: [
      {title: 'shutter island', img: require('./app/images/shutter_island.jpg')},
      {title: 'Catch Me If You Can', img: require('./app/images/catchme.jpg')},
      {title: 'Inception', img: require('./app/images/Inception.jpeg')},
      {title: 'Titanic', img: require('./app/images/titanic.jpg')},
      {title: 'Revenant', img: require('./app/images/revenant.jpg')},
      {title: 'The Wolf of Wall Street', img: require('./app/images/wolf.png')},
      {title: 'Django', img: require('./app/images/django.jpg')},
      {title: 'The Great Gatsby', img: require('./app/images/gatsby.jpg')}
    ],
    imagesReference: [],
    text: '',

  }
  componentDidMount() {
    this.setState({ imagesReference: this.state.images})
  }
  render() {

    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
      <ImageElement imgsource={val.img}/>
      </View>


    })
    return (
      <View style={styles.container}>
        <View style={styles.photogrid}> 
        {images}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#252525'
  
 },
 photogrid: {
   flex: 1,
   padding: 2,
   flexDirection: 'row',
   flexWrap: 'wrap'

 }
});
