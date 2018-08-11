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
      {title: 'The Great Gatsby', img: require('./app/images/gatsby.jpg')},
      {title: 'The Departed', img: require('./app/images/departed.jpg')},
      {title: 'Gangs of New York', img: require('./app/images/gangs.jpg')}
    ],
    imagesReference: [],
    text: '',

  }
  componentDidMount() {
    this.setState({ imagesReference: this.state.images})
  }

  search (text)  {
    this.setState({text: text});
    let imgArr = this.state.images;

    for(var i = 0; i < imgArr.length; i++) {
      if (text === imgArr[i].title) {
        this.setState({ images: [imgArr[i] ] })
      }
    }

    if(!text) {
      //Resets Search 
      this.setState({ images: this.state.imagesReference})
    }
  }

  render() {

    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
      <ImageElement imgsource={val.img}/>
      </View>


    })
    return (
      <View style={styles.container}>
      <TextInput style={styles.textinput} underlineColor='transparent'
      placeholder='search movie'
      onChangeText={(text) => this.search(text)} value={this.state.text}
      />
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

 textinput: {
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 8,
  padding: 10,
  backgroundColor: '#fff'
 },
 photogrid: {
   flex: 1,
   padding: 2,
   flexDirection: 'row',
   flexWrap: 'wrap'

 },
 imagewrap: {
padding: 2,
height: 120,
width: (Dimensions.get('window').width / 2 ) - 2,
 }
});
