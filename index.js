/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Login from './src/screens/Login';

AppRegistry.registerComponent(appName, () => Login);
