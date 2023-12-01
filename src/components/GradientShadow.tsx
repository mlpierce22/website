import React from 'react';
import { Box, Fade } from '@chakra-ui/react';

type GradientShadowProps = {
    children: React.ReactNode;
    show: boolean;
};

const GradientShadow = ({ children, show }: GradientShadowProps) => {
    return (
        <Box as="div" className='relative w-full h-full'>
            <Fade in={show} transition={{ enter: { duration: 1 }, exit: { duration: 1 } }}>

                <Box as="div" className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"></Box>
            </Fade>


            <Box as="div" className="relative flex items-center justify-center w-full h-full">
                {children}
            </Box>
        </Box>
    );
};

export default GradientShadow;


