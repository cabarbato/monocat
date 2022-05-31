export {
    windowWidth,
    windowHeight, 
    default as getBreakpoint
} from './breakpoints';

export function between(x, range) {
    return x >= range[0] && x <= range[1];
  }