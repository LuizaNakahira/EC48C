/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Login from './src/screens/Login';

import App from './App';

AppRegistry.registerComponent(appName, () => Login);
