


import { Box, Text, VStack } from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import { Property } from "csstype";
import TypeText from "./TypeText";

export type TypeTextProps = {
    paragraph: string,
    typeSpeedSeconds: number,
    delaySeconds?: number
    doneTypingCallback?: () => void
    children?: React.ReactNode
    align?: Property.AlignItems
}

const TypeParagraph = ({ paragraph, typeSpeedSeconds, delaySeconds, doneTypingCallback, children, align }: TypeTextProps) => {
    const stackWidthRef = useRef<HTMLDivElement>(null);
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

        const desiredDimensions = stackWidthRef.current?.getBoundingClientRect();

        // Get the width of the parent container
        const parentWidth = desiredDimensions?.width || window.innerWidth * 0.9;

        const lines = breakStringToFitWindow(paragraph, parentWidth / 16);
        const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000));
        const doneTyping = [];
        const updateDoneTyping = (index: number, linesArr: string[]) => {
            doneTyping[index] = true;
            if (doneTyping.length === linesArr.length) {
                isTyping.current = false;
                if (doneTypingCallback) doneTypingCallback();

                // Simply replace the rendered components with just the text element
                setComponents(() => {
                    const MemoizedComponent = memo(() => (
                        <Box as="span">
                            {children ? children :
                                <Text fontSize={{ base: "lg", md: "3xl" }} >
                                    {linesArr.join(' ')}
                                </Text>
                            }
                        </Box>
                    ))
                    MemoizedComponent.displayName = "JustText";
                    return [
                        MemoizedComponent
                    ]
                }

                );


            }
        }
        lines.forEach(async (line, index, linesArr) => {
            // Block against re-rendering
            if (hasRun.current.includes(index)) return;
            hasRun.current.push(index);

            // Wait for it to be this line's turn
            await sleep(typeSpeedSeconds * (index + (delaySeconds || 0)));
            setComponents((components) => {
                const MemoizedTypeTextComponent = memo(() => (
                    <TypeText steps={line.length} typeSpeedSeconds={typeSpeedSeconds} doneTyping={() => updateDoneTyping(index, linesArr)}>
                        {children
                            ? children
                            : <Text fontSize={{ base: "lg", md: "3xl" }} >
                                {line}
                            </Text>
                        }
                    </TypeText>
                ));

                MemoizedTypeTextComponent.displayName = 'MemoizedTypeTextComponent';

                return [...components, MemoizedTypeTextComponent];
            });

        });
    }, [children, delaySeconds, doneTypingCallback, paragraph, typeSpeedSeconds])

    return (
        <VStack alignItems={align ? align : "start"} width={"80vw"} className="max-w-6xl" ref={stackWidthRef} spacing={"unset"}>
            {
                components.map((Component, index) => (
                    <Component key={index} />
                ))
            }
        </VStack>

    );
};

export default TypeParagraph;