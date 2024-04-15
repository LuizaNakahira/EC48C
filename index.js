/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import NovaPesquisa from './src/screens/NovaPesquisa'
import Login from './src/screens/Login';

AppRegistry.registerComponent(appName, () => Login);
