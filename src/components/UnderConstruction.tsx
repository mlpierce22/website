'use client'
import { Box, Center, Heading, Icon, Text } from '@chakra-ui/react';
import { IoIosHammer } from "react-icons/io";
import { keyframes } from "@emotion/react";

const spin = keyframes`
0% { transform: rotate(-45deg); }
50% { transform: rotate(45deg); }
            100% { transform: rotate(-45deg); }
`;


export const UnderConstruction = () => {
    return (
        <Center h="100vh">
            <Box textAlign="center">
                <Icon as={IoIosHammer} boxSize={100}
                    css={{
                        animation: `${spin} 2s linear infinite`
                    }}
                />
                <Heading as="h2" size="lg" bgGradient='linear(to-r, red.500, yellow.500)'
                    bgClip='text' mt={4}>Page Under Construction</Heading>
                <Text mt={2}>Thanks for checking out my site! I'm still working on it but it should be up soon!</Text>
            </Box>
        </Center>
    );
};

