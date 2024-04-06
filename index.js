/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import Relatorio from './src/screens/Relatorio';
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModifPesquisa from './src/screens/ModifPesquisa';

AppRegistry.registerComponent(appName, () => NovaPesquisa);
