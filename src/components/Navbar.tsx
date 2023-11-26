"use client";
import { Button, HStack, useColorMode, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavItemsList, { NavItem } from '@/components/NavItemList';
import Footer from './Footer';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navItems: NavItem[] = [
        { name: 'Home', icon: '🏠', path: '/', variant: 'ghost', size: "xl" },
        { name: 'About Me', icon: '👤', path: '/about', variant: 'ghost', size: "xl" },
        { name: 'Projects', icon: '📚', path: '/projects', variant: 'ghost', size: "xl" },
        { name: 'Bookmarks', icon: '🔖', path: '/bookmarks', variant: 'ghost', size: "xl" },
        { name: 'Blog', icon: '📝', path: '/blog', variant: 'ghost', size: "xl" },
    ]

    return (
        <HStack p={4} justifyContent='space-between' boxShadow='sm'>
            <IconButton
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label={"Open Menu"}
                hideFrom='md'
                onClick={onOpen}
                ml={"auto"}
            />
            <HStack hideBelow='md' flexGrow={1} justifyContent={'center'}>
                <HStack flexGrow={1} justifyContent={'center'}>
                    <NavItemsList navItems={navItems} />
                </HStack>
                <Button onClick={toggleColorMode} variant={"outline"} ml={"auto"}>{colorMode === 'light' ? "🌙" : "☀️"}</Button>
            </HStack>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <Button onClick={toggleColorMode} variant={"outline"} w={"fit-content"} m={4}>{colorMode === 'light' ? "🌙" : "☀️"}</Button>
                        <DrawerCloseButton />

                        <VStack p={4} justifyContent='space-between' alignItems={"start"} mb={"auto"} ml={"auto"} mr="auto">
                            <NavItemsList navItems={navItems} />
                        </VStack>
                        <Footer />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </HStack>
    );
}

export default Navbar;
