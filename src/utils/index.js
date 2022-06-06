import { Text } from 'react-native';

export {
    windowWidth,
    windowHeight,
    default as getBreakpoint
}
    from './breakpoints';

export {
    default as playSound
}
    from './sound';

export function between(x, range) {
    return x >= range[0] && x <= range[1];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export function jsxSyntax(d) {
    return (<>
        <Text>{"<"}</Text>
        <Text>{d}</Text>
        <Text>{"/>"}</Text>
    </>)
}