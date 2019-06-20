import  React from 'react'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducer/index'
import AppContainer from "./component/index"
let store = createStore(reducer, applyMiddleware(thunk,logger));


export default class extends React.Component {
    render () {
        return (<Provider store={store}>
            <AppContainer />
        </Provider>)
    }
};