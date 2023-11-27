"use client";
import { Button, HStack, useColorMode, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavItemsList, { NavItem } from '@/components/NavItemList';
import Footer from './Footer';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navItems: NavItem[] = [
        { id: "nav-items-home", name: 'Home', icon: '🏠', path: '/', variant: 'ghost', size: "xl" },
        { id: "nav-items-about", name: 'About Me', icon: '👤', path: '/about', variant: 'ghost', size: "xl" },
        { id: "nav-items-projects", name: 'Projects', icon: '📚', path: '/projects', variant: 'ghost', size: "xl" },
        { id: "nav-items-bookmarks", name: 'Bookmarks', icon: '🔖', path: '/bookmarks', variant: 'ghost', size: "xl" },
        { id: "nav-items-blog", name: 'Blog', icon: '📝', path: '/blog', variant: 'ghost', size: "xl" },
    ]

    return (
        <HStack p={4} justifyContent='space-between' className='border-b-2 dark:border-b-slate-700 border-b-slate-200'>
            <Button hideFrom='md' onClick={toggleColorMode} variant={"outline"} w={"fit-content"} ml={"auto"}>{colorMode === 'light' ? "🌙" : "☀️"}</Button>
            <IconButton
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label={"Open Menu"}
                hideFrom='md'
                onClick={onOpen}
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
                        <DrawerCloseButton />

                        <VStack p={4} mt={4} justifyContent='space-between' alignItems={"start"} mb={"auto"} ml={"auto"} mr="auto">
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
