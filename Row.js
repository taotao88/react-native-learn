import React, { Component } from 'react';
import {
  Image,              // Renders background image
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class Row extends Component {

  // Extract question and onPress props passed from List component
  render({ question, onPress } = this.props) {
    // Extract values from question object
    const { title, rating, image } = question;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.7}
      >
        {/* Background image */}
        <View style={styles.titleBackground}>
          {/* Title */}
          <Text style={[styles.text, styles.title]}>{title}</Text>
          {/* Rating */}
        </View>
      </TouchableOpacity>
    );
  }

}

/*
 * Below styles are used above. Please pay attention to the `style` property in each Component,
 * such as `<Text style={[styles.text, styles.title]}>{title}</Text>`
 */
const styles = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 2,                   // Add padding at the bottom
  },
  // Background image
  titleBackground: {
    height: screen.height / 10,         // Divide screen height by 10
    justifyContent: 'center',           // Center vertically
    alignItems: 'flex-start',           // Options: flex-start, flex-end, center, stretch. Please google
  },
  // Shared text style
  text: {
    color: '#00F',                      // Black text color
    backgroundColor: 'transparent',     // No background
    fontFamily: 'Avenir',               // Change default font
    // fontWeight: 'bold',                 // Bold font
    // Add text shadow
    // textShadowColor: '#222',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 4,
  },
  // Question title
  title: {
    fontSize: 22,                       // Bigger font size
  },
});
