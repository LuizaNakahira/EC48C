/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import DrawerHome from './src/screens/DrawerHome';

AppRegistry.registerComponent(appName, () => DrawerHome);
