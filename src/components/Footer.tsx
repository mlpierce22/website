'use client'
import { Box, Flex, Text, Link, VStack, HStack, Heading } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NavItemsList, { NavItem } from './NavItemList';

const Footer = () => {
    const bottomIcons: NavItem[] = [
        { id: "bottom-github-link", name: "Github", path: "https://github.com/mlpierce22", isExternal: true, icon: <FaGithub size="1.5rem" />, variant: "solid" },
        { id: "bottom-linkedin-link", name: "LinkedIn", path: "https://linkedin.com/in/malapier", isExternal: true, icon: <FaLinkedin size="1.5rem" />, variant: "solid", }

    ]
    return (
        <VStack p={8} mt={"auto"} className='border-t-2 dark:border-t-slate-700 border-t-slate-200'>
            <VStack spacing={5}>
                <HStack spacing={5}>
                    <NavItemsList navItems={bottomIcons} showGradient={true}></NavItemsList>
                </HStack>
                <Text>&copy; {new Date().getFullYear()} Mason Pierce</Text>
            </VStack>
        </VStack>
    );
}

export default Footer;