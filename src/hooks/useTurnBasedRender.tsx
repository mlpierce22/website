import { useState } from "react";

export const useTurnBasedRender = (delayMs?: number) => {
    const [turnCounter, setTurnCounter] = useState(0);
    const setNextTurn = (nextTurn: number) => {
        if (nextTurn <= turnCounter) return;

        if (delayMs) {
            setTimeout(() => {
                setTurnCounter(nextTurn);
            }, delayMs);
            return;
        }

        setTurnCounter(nextTurn);
    };
    const isMyTurn = (myPlace: number) => {
        return turnCounter >= myPlace;
    };
    return { setNextTurn, isMyTurn };
}
