import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from "./app/component/navigator/HomeScreen"

AppRegistry.registerComponent(appName, () => AppContainer);
