import React from 'react';
import { Box, Fade, useColorMode } from '@chakra-ui/react';

type GradientShadowProps = {
    children: React.ReactNode;
    show: boolean;
    fit?: boolean;
};

const GradientShadow = ({ children, show, fit }: GradientShadowProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const { colorMode } = useColorMode();
    return (
        <Box as="div" className={`relative ${fit ? "w-fit h-fit" : "w-full h-full"}`} onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Fade in={isHovered && show} transition={{ enter: { duration: 1 }, exit: { duration: 1 } }}>

                <Box as="div" className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 opacity-75 blur"></Box>
            </Fade>


            <Box as="div" className={`relative flex items-center justify-center ${fit ? "w-fit h-fit" : "w-full h-full"}`} bg={colorMode === "dark" ? "gray.800" : "white"} borderRadius={"md"}>
                {children}
            </Box>
        </Box>
    );
};

export default GradientShadow;


