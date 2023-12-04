/** A list of useful animations for fun */
import { keyframes } from "@emotion/react";

export const hammer = keyframes`
0% { transform: rotate(-45deg); }
50% { transform: rotate(45deg); }
            100% { transform: rotate(-45deg); }
`;

export const wave = keyframes`
0% { transform: rotate(0deg); }
50% { transform: rotate(90deg); }
100% { transform: rotate(0deg); }
`;

export const typing = keyframes`
0% { width: 0%; visibility: hidden; }
100% { width: 100%; }
`

export const cursorBlink = keyframes`
0% { opacity: 0; }
50% { opacity: 1; }
100% { opacity: 0; }
`

export const createCursorBlinkAnimation = (blinkSpeedPerSecond: number): string => {
    return `${cursorBlink} ${blinkSpeedPerSecond}s infinite;`
}

export const createTypingAnimation = (chars: number, typeDuration: number, blinkSpeed: number, isInfinite: boolean = false): string => {
    return `${typing} ${typeDuration}s steps(${chars}) ${isInfinite ? 'infinite' : ''} alternate, ${cursorBlink} ${blinkSpeed}s infinite;`
}
