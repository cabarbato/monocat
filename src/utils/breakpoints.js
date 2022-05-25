import { Dimensions } from 'react-native';

const breakpoints = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    },
    windowWidth = Dimensions.get('window').width,
    windowHeight = Dimensions.get('window').height - 64, // Subtract nav label height
    getBreakpoint = values => {
        let breakpoint = 'xs'
        Object.entries(breakpoints).forEach(([i, val]) => {
            // TODO: iterate search through hashtable of breakpoint sizes, break once greater than windowWidth to get current size.
            // then, find matching breakpoint from values. If it doesn't exist, check for the next smallest size until reach xs
            return values.xs
        })
    };

export {
    windowHeight,
    windowWidth
};

export default getBreakpoint