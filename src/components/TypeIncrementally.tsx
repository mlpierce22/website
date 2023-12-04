"use client"
import { createCursorBlinkAnimation } from "@/animations";
import { Box } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

type TypeIncrementallyProps = {
    text: string;
    typingSpeed: number; // ms per character
    delaySeconds?: number;
    endEmoji?: string;
    doneTyping?: () => void;
}

const TypeIncrementally = ({ text, typingSpeed, delaySeconds, endEmoji, doneTyping }: TypeIncrementallyProps) => {
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [showEndEmoji, setShowEndEmoji] = useState(false);
    const isTyping = useRef(false);

    useEffect(() => {
        if (isTyping.current) return;

        isTyping.current = true;
        let currentTimeout: NodeJS.Timeout;
        let delay: NodeJS.Timeout;
        const type = async () => {
            if (delaySeconds) {
                await new Promise(resolve => {
                    delay = setTimeout(resolve, delaySeconds * 1000)
                });
            }

            for (let i = 0; i < text.length; i++) {
                await new Promise(resolve => {
                    currentTimeout = setTimeout(resolve, typingSpeed)
                });
                setTypedText(prev => prev + text.charAt(i));
            }

            // Add end emoji if provided
            if (endEmoji) {
                await new Promise(resolve => {
                    setTimeout(resolve, typingSpeed)
                })
                setShowEndEmoji(true);
            }

            // give cursor time to blink
            await new Promise(resolve => {
                setTimeout(resolve, typingSpeed)
            })

            setShowCursor(false);

            // Let parent know we're done typing
            if (doneTyping) doneTyping()

            isTyping.current = false;
        }

        type();
    }, [text, typingSpeed]);

    return (
        <>
            {typedText}
            {showEndEmoji && <Box as="span" className="ml-2">{endEmoji}</Box>}
            {showCursor && <Box as="span" className="-ml-2" css={{ animation: createCursorBlinkAnimation(1) }}>|</Box>}
        </>
    );
}

export default TypeIncrementally;
