import { createSwitchNavigator } from 'react-navigation'
import { SYSTEM_ROUTES } from '../constants'
import { HomeStackNavigator } from './HomeStackNavigator';

export const HomeSwitchNavigator = createSwitchNavigator({
    [SYSTEM_ROUTES.HOME_STACK_NAVIGATOR.ROUTE]: HomeStackNavigator,
},
{
    initialRouteName: SYSTEM_ROUTES.HOME_STACK_NAVIGATOR.ROUTE
})