import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../../reducers'
import { createLogger } from 'redux-logger'
import { HomeSwitchNavigator } from '../../navigators'
import { Root } from 'native-base'
import { StatusBar } from 'react-native';
import theme from "../../style/theme";

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <StatusBar backgroundColor={theme.primary.default} barStyle='light-content' />
                    <HomeSwitchNavigator />
                </Root>
            </Provider>
        )
    }
}