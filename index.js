/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import NovaPesquisa from './src/screens/NovaPesquisa'

AppRegistry.registerComponent(appName, () => NovaPesquisa);
