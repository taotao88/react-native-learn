import React, { Component } from 'react'; // import components from react library. React is the default component, so no `{}` around it.
import {
  Navigator,    // Allows to navigate between different screens, deprecated in the future. TODO: remove Navigator
  StatusBar     // Allows to hide the status bar. TODO: remove this.
} from 'react-native';
import List from './List';         // import List from List.js
import Question from './Question'; // import List from Question.js

/*
 * RouteMapper is function which handle navigation between a list and a question details screen.
 * `<List navigator={navigationOperations} />` is a component. 
 * `<Question questoin={route.question} navigator={navigationOperations} />` is another component imported.
 * How RouteMapper will be used is not discussed here. In the future, it should be discussed in details.
 */
const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <List navigator={navigationOperations} />
    );
  } else if (route.name === 'question') {
    return (
      <Question
        // Pass question object passed with route down as a prop
        // Here `question` and `navigator` are props.
        question={route.question}
        // Pass navigationOperations as navigator prop
        navigator={navigationOperations}
      />
    );
  }
};

export default class App extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }

  render() {
    return (
      // Handle navigation between screens
      <Navigator
        // Default to list route
        initialRoute={{name: 'list'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}
