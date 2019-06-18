import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from "./app/index"



AppRegistry.registerComponent(appName, () => AppContainer);
