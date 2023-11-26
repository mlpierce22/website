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