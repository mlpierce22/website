import { createTypingAnimation } from "@/animations";
import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

export type TypeTextProps = {
    steps: number,
    typeSpeedSeconds: number,
    children: ReactNode,
    delaySeconds?: number
    doneTyping?: () => void
}
const TypeText = ({ steps, typeSpeedSeconds, children, delaySeconds, doneTyping }: TypeTextProps) => {
    const cursorExists = "3px solid white"
    const noCursor = "none"
    const [cursor, setCursor] = useState(cursorExists)
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowAnimation(true)
        }, delaySeconds ? delaySeconds * 1000 : 0);

        setTimeout(() => {
            setCursor(noCursor)
            if (doneTyping) doneTyping()
        }, (typeSpeedSeconds * 1000));
    }, [delaySeconds, doneTyping, typeSpeedSeconds]);



    return (
        <>
            {showAnimation && (
                <Box as="div" display={"flex"}>
                    <Box as="span" css={{
                        animation: createTypingAnimation(steps, typeSpeedSeconds, 0.5),
                        borderRight: cursor,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}>{children}
                    </Box>
                </Box>
            )}
        </>
    );
};

export default TypeText;