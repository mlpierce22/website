import { createTypingAnimation } from "@/animations";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export type TypeTextProps = {
    text: string,
    typeSpeedSeconds: number,
}
const TypeText = ({ text, typeSpeedSeconds }: TypeTextProps) => {
    const cursorExists = "3px solid white"
    const noCursor = "none"
    const [cursor, setCursor] = useState(cursorExists)

    setTimeout(() => {
        setCursor(noCursor)
    }, (typeSpeedSeconds * 1000) + 500);

    return (
        <Box as="div" display={"flex"}>
            <Box as="span" css={{
                animation: createTypingAnimation(text.length, typeSpeedSeconds, 0.5),
                borderRight: cursor,
                whiteSpace: "nowrap",
                overflow: "hidden",
            }}>{text}</Box>
        </Box>
    );
};

export default TypeText;