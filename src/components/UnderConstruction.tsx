'use client'
import { Box, Center, Heading, Icon, Text } from '@chakra-ui/react';
import { IoIosHammer } from "react-icons/io";
import { hammer } from '@/animations';

export const UnderConstruction = () => {
    return (
        <Center height={"100%"} my={"30vh"}>
            <Box textAlign="center">
                <Icon as={IoIosHammer} boxSize={100}
                    css={{
                        animation: `${hammer} 2s linear infinite`
                    }}
                />
                <Heading as="h2" size={{ base: "lg", md: "2xl" }} px={10} className="leading-snug" bgGradient='linear(to-r, red.500, yellow.500)'
                    bgClip='text' mt={4}>Page Under Construction</Heading>
                <Text mt={2} px={10} fontSize={{ base: "lg", md: "2xl" }} >{"Still working on this page! Check back later!"}</Text>
            </Box>
        </Center>
    );
};

