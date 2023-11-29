'use client'
import { Box, Flex, Text, Link, VStack, HStack, Heading } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NavItemsList, { NavItem } from './NavItemList';

const Footer = () => {
    const bottomIcons: NavItem[] = [
        { id: "bottom-github-link", name: "", path: "https://github.com/mlpierce22", isExternal: true, icon: <FaGithub />, variant: "link" },
        { id: "bottom-linkedin-link", name: "", path: "https://linkedin.com/in/malapier", isExternal: true, icon: <FaLinkedin />, variant: "link" }

    ]
    return (
        <VStack p={4} mt={"auto"}>
            <VStack>
                <HStack>
                    <NavItemsList navItems={bottomIcons}></NavItemsList>
                </HStack>
                <Text>&copy; {new Date().getFullYear()} Mason Pierce</Text>
            </VStack>
        </VStack>
    );
}

export default Footer;