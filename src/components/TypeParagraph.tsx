


import { Box, Text, useDimensions } from "@chakra-ui/react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import TypeText from "./TypeText";

export type TypeTextProps = {
    paragraph: string,
    typeSpeedSeconds: number,
    delaySeconds?: number
    desiredDimensions?: ReturnType<typeof useDimensions>
    doneTypingCallback?: () => void
}

const TypeParagraph = ({ paragraph, typeSpeedSeconds, delaySeconds, desiredDimensions, doneTypingCallback }: TypeTextProps) => {
    const [components, setComponents] = useState<React.ComponentType[]>([]);
    const hasRun = useRef([] as number[]);
    const isTyping = useRef(false);
    const breakStringToFitWindow = (inputString: string, maxCharsPerLine: number) => {
        const words = inputString.split(' ');
        let currentLine = '';
        let result = [];

        words.forEach(word => {
            if ((currentLine + word).length > maxCharsPerLine) {
                result.push(currentLine.trim());
                currentLine = word + ' ';
            } else {
                currentLine += word + ' ';
            }
        });

        if (currentLine) {
            result.push(currentLine.trim());
        }

        return result;
    }


    useEffect(() => {
        isTyping.current = true;
        // Get the width of the parent container
        const parentWidth = desiredDimensions?.borderBox?.width || window.innerWidth * 0.9;

        const lines = breakStringToFitWindow(paragraph, parentWidth / 14);
        const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000));
        const doneTyping = [];
        const updateDoneTyping = (index: number, linesArr: string[], parentWidth: number) => {
            doneTyping[index] = true;
            if (doneTyping.length === linesArr.length) {
                isTyping.current = false;
                if (doneTypingCallback) doneTypingCallback();

                // Simply replace the rendered components with just the text element
                setComponents(() => [
                    memo(() => (
                        <Box as="div" display={"flex"}>
                            <Box as="span">
                                <Text fontSize={{ base: "lg", md: "3xl" }} key={index}>
                                    {linesArr.join(' ')}
                                </Text>
                            </Box>
                        </Box>
                    ))
                ]);


            }
        }
        lines.forEach(async (line, index, linesArr) => {
            // Block against re-rendering
            if (hasRun.current.includes(index)) return;
            hasRun.current.push(index);

            // Wait for it to be this line's turn
            await sleep(typeSpeedSeconds * (index + (delaySeconds || 0)));
            setComponents((components) => [...components, memo(() => (
                <TypeText steps={line.length} typeSpeedSeconds={typeSpeedSeconds} doneTyping={() => updateDoneTyping(index, linesArr, parentWidth)}>
                    <Text fontSize={{ base: "lg", md: "3xl" }} >
                        {line}
                    </Text>
                </TypeText>
            ))])
        });
    }, [])

    return (
        <>
            {
                components.map((Component, index) => (
                    <Component key={index} />
                ))
            }
        </>
    );
};

export default TypeParagraph;