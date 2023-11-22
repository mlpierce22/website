'use client'
import { Box, Center, Heading, Icon, Text } from '@chakra-ui/react';
import { IoIosHammer } from "react-icons/io";
import { hammer } from '@/animations';

export const UnderConstruction = () => {
    return (
        <Center height={"100%"}>
            <Box textAlign="center">
                <Icon as={IoIosHammer} boxSize={100}
                    css={{
                        animation: `${hammer} 2s linear infinite`
                    }}
                />
                <Heading as="h2" size="lg" bgGradient='linear(to-r, red.500, yellow.500)'
                    bgClip='text' mt={4}>Page Under Construction</Heading>
                <Text mt={2}>{"Thanks for checking out my site! I'm still working on it but it should be up soon!"}</Text>
            </Box>
        </Center>
    );
};

