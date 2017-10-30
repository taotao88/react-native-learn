/*
 * index.android.js is the main entry point for android. so, in this file, we need to register component App imported from App.js 
******/

import { AppRegistry } from 'react-native';         // import component AppRegistry from react-navtive libary
import App from './App';                            // import component App from file App.js in the same directory with this file

AppRegistry.registerComponent('LeetQ', () => App);  // LeetQ is APP name. `() => App` is callback function, short cut for function() { return App; }
