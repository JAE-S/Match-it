import React from "react"; 
import {View, Text, StyleSheet} from 'react-native'; 
import PropTypes from 'prop-types';

class Game extends React.Component{
  static propTypes = {
    RandomNumberCount: PropTypes.number.isRequired, 
  };

  randomNumbers = Array
    .from({length: this.props.RandomNumberCount})
    .map(() => 1 + Math.floor( 10 * Math.random()));
    target = this.randomNumbers
    .slice(0, this.props.RandomNumberCount -2)
    .reduce((acc, curr) => acc + curr, 0 ); 

    render(){
        return (
          <>
            <View style= {styles.container}>
                <Text style={styles.target}>
                  {this.target}
                </Text>
                <View  style={styles.btnContainer}>
                  { this.randomNumbers.map((randomNumber, i) =>
                  <Text 
                    key={i}
                    style={styles.randomBtn}
                  >
                    {randomNumber}
                  </Text> 
                  )}
                </View> 
            </View>
          </>
        );
    }
}

const styles = StyleSheet.create({
    // center: {
    //   textAlign: "center", 
    // },
    container: {
      backgroundColor: "#ddd",
      flex: 1, 
      marginVertical: 50,
    },
    target: {
      fontSize: 40,
      backgroundColor: "#aaa",
      marginHorizontal: 50, 
      marginVertical: 50,
      textAlign: "center", 
    },
    randomBtn: {
      textAlign: "center", 
      fontSize: 20,
      backgroundColor: "black",
      margin: 20,
      color: "#ddd"
    },
    btnContainer: {
      marginHorizontal: 50, 
      marginVertical: 50,
    }
   
  });

  export default Game; 