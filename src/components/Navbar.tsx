"use client";
import { Button, HStack, useColorMode, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavItemsList, { NavItem } from '@/components/NavItemList';
import Footer from './Footer';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navItems: NavItem[] = [
        { id: "nav-items-home", name: 'Home', icon: '🏠', path: '/', variant: 'ghost' },
        { id: "nav-items-about", name: 'About Me', icon: '👤', path: '/about', variant: 'ghost' },
        { id: "nav-items-projects", name: 'Projects', icon: '📚', path: '/projects', variant: 'ghost' },
        { id: "nav-items-projects", name: 'Resume', icon: '📄', path: 'https://docs.google.com/document/d/1MMG5e2tqUylj28SYSk2iXYyEQ-oo53tLCewux9yMtpc/edit', variant: 'ghost', isExternal: true },
        // Later
        // { id: "nav-items-bookmarks", name: 'Bookmarks', icon: '🔖', path: '/bookmarks', variant: 'ghost' },
        // { id: "nav-items-travel", name: 'Travel', icon: '✈️', path: '/travel', variant: 'ghost' },
        // Later
        // { id: "nav-items-blog", name: 'Blog', icon: '📝', path: '/blog', variant: 'ghost' },
    ]

    const hideThreshold = 'lg';

    return (
        <HStack p={4} justifyContent='space-between' className='border-b-2 dark:border-b-slate-700 border-b-slate-200'>
            <Button hideFrom={hideThreshold} onClick={toggleColorMode} variant={"outline"} w={"fit-content"} ml={"auto"}>{colorMode === 'light' ? "🌙" : "☀️"}</Button>
            <IconButton
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label={"Open Menu"}
                hideFrom={hideThreshold}
                onClick={onOpen}
            />
            <HStack hideBelow={hideThreshold} flexGrow={1} justifyContent={'center'}>
                <HStack flexGrow={1} justifyContent={'center'}>
                    <NavItemsList navItems={navItems} />
                </HStack>
                <Button onClick={toggleColorMode} variant={"outline"} ml={"auto"}>{colorMode === 'light' ? "🌙" : "☀️"}</Button>
            </HStack>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />

                        <VStack p={4} mt={4} justifyContent='space-between' mb={"auto"} ml={"auto"} mr="auto">
                            <NavItemsList navItems={navItems} callbackWhenClicked={onClose} />
                        </VStack>
                        <Footer />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </HStack>
    );
}

export default Navbar;
