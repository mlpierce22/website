import { createTypingAnimation } from "@/animations";
import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

export type TypeTextProps = {
    steps: number,
    typeSpeedSeconds: number,
    children: ReactNode,
}
const TypeText = ({ steps, typeSpeedSeconds, children }: TypeTextProps) => {
    const cursorExists = "3px solid white"
    const noCursor = "none"
    const [cursor, setCursor] = useState(cursorExists)

    setTimeout(() => {
        setCursor(noCursor)
    }, (typeSpeedSeconds * 1000));

    return (
        <Box as="div" display={"flex"}>
            <Box as="span" css={{
                animation: createTypingAnimation(steps, typeSpeedSeconds, 0.5),
                borderRight: cursor,
                whiteSpace: "nowrap",
                overflow: "hidden",
            }}>{children}</Box>
        </Box>
    );
};

export default TypeText;