import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from '../screens'
import { SYSTEM_ROUTES } from '../constants'

export const HomeStackNavigator = createStackNavigator({
    [SYSTEM_ROUTES.HOME_SCREEN.ROUTE]: {
        screen: HomeScreen,
        navigationOptions: {
            title: SYSTEM_ROUTES.HOME_SCREEN.HEADER_TITLE,
        },
    }
})