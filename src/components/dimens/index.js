import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,    
} from 'react-native-responsive-screen'

export const w = dimension => {
    return  wp2dp((dimension/360) * 100 + '%');
}

export const h = dimension => {
    return  hp2dp((dimension/640) * 100 + '%');
}