/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import NovaConta from './src/screens/NovaConta';

AppRegistry.registerComponent(appName, () => NovaConta);
