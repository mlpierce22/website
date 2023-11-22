'use client'
import { Box, Flex, Text, Link, VStack, HStack, Heading } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NavItemsList, { NavItem } from './NavItemList';

const Footer = () => {
    const navItems: NavItem[] = [
        { name: '🏠 Home', path: '/', variant: 'link' },
        { name: '👤 About Me', path: '/about', variant: 'link' },
        { name: '📚 Projects', path: '/projects', variant: 'link' },
        { name: '🔖 Bookmarks', path: '/bookmarks', variant: 'link' },
        { name: '📝 Blog', path: '/blog', variant: 'link' },]
    return (
        <VStack p={4}>
            <VStack>
                <HStack>
                    <Link href="https://github.com/mlpierce22" isExternal><FaGithub /></Link>
                    <Link href="https://linkedin.com/in/malapier" isExternal><FaLinkedin /></Link>
                </HStack>
                <Text>&copy; {new Date().getFullYear()} Mason Pierce</Text>
                {/* <VStack>
                    <Text>Links:</Text>
                    <NavItemsList navItems={navItems} />
                </VStack> */}
            </VStack>
        </VStack>
    );
}

export default Footer;