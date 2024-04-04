/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';

AppRegistry.registerComponent(appName, () => NovaConta);
