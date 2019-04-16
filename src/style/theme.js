import { Platform } from 'react-native';

export default {
    //Blue colors 
    primary: {
        default: '#62CCCA', 
        light: '#2BD1C8',
        dark: '#16b7ac',
        lightBackground: '#e5fcfb',
        background: '#a5e5e4',
        contrastText: '#FFF'
    },
    //Purple colors
    secondary: {
        default: '#84256C',
    },
    //Gray Colors
    third: {
        default: '#A3A3A3',
        light: '#c9c9c9', 
        clear: '#E8E8E8',
        dark: '#7D7D7D',
        more: '#C9C9C9',
        icons: '#B5B5B5'
    },
    modal: { 
        background: 'rgba(52, 52, 52, 0.8)'
    },
    font: {
        robotoLight: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto_light',
        robotoThin: Platform.OS === 'ios' ? 'Roboto-Thin' : 'Roboto_thin',
        robotoRegular: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_regular',
        robotoMedium: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto_medium',
        robotoBold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_bold',
    }
};