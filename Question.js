import React, { Component } from 'react';
import {
  Image,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

export default class Question extends Component {

  // Extract question object passed as a prop from Row component
  render({ question } = this.props) {
    // Extract values from question object
    const { title, description, solution } = question;
    return (
      <View style={styles.container}>
        {/* Use ScrollView in case solution is too large to fit on the screen */}
        <ScrollView
          style={{flex: 1}}
        >
          {/* Title */}
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{description}</Text>

          {/* Solution */}
          {/* <View style={styles.solution}> */}
          <SyntaxHighlighter style={github}>{solution}</SyntaxHighlighter>
            {/* <Text style={styles.solutionText}>{solution}</Text> */}
          {/* </View> */}
        </ScrollView>
        {/* Button container */}
        <View style={styles.buttonContainer}>
          {/* Press handler */}
          <TouchableOpacity
            // Go to the previous screen
            onPress={() => {this.props.navigator.pop();}}
            // Dim button a little bit when pressed
            activeOpacity={0.7}
            // Pass button style
            style={styles.button}
          >
            <Text style={styles.buttonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    backgroundColor: '#333',            // Dark background
  },
  // Background image
  imageBackground: {
    flex: 1,                            // Take up all screen space
    padding: 20                         // Add padding for content inside
  },
  text: {
    backgroundColor: 'transparent',     // No background
    color: '#fff',                      // White text color
    fontFamily: 'Avenir',               // Change default font
    // fontWeight: 'bold',                 // Bold font
    // Add text shadow
    // textShadowColor: '#222',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },
  title: {
    fontSize: 20,                       // Bigger font size
    marginTop:20,                      // Add space between top screen edge
    marginBottom: 5,                    // Add space at the bottom
    textAlign: 'center',                // Center horizontally
    fontWeight: 'bold',                 // Bold font
  },
  value: {
    fontSize: 16,                       // Smaller font size
  },
  solution: {
    backgroundColor: 'rgba(255,255,255,0.5)', // Semi-transparent white background
    // borderRadius: 5,                   // Rounder corners
    // marginTop: 10,                      // Margin at the top
    // padding: 10,                        // Padding for content inside
  },
  solutionText: {
    color: '#333',                      // Dark text color
    fontFamily: 'Avenir',               // Change default font
    fontSize: 15,                       // Small font size
  },
  buttonContainer: {
    marginTop: 20,                      // Add some margin at the top
  },
  button: {
    backgroundColor: '#617D8A',         // Color the button
    padding: 15                         // Padding inside
  },
  buttonText: {
    color: '#fff',                      // White button text
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    textAlign: 'center',                // Center horizontally
  }
});
