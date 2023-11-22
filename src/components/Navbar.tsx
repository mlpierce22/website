"use client";
import { Button, HStack, useColorMode, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavItemsList, { NavItem } from '@/components/NavItemList';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navItems: NavItem[] = [
        { name: '🏠 Home', path: '/', variant: 'ghost' },
        { name: '👤 About Me', path: '/about', variant: 'ghost' },
        { name: '📚 Projects', path: '/projects', variant: 'ghost' },
        { name: '🔖 Bookmarks', path: '/bookmarks', variant: 'ghost' },
        { name: '📝 Blog', path: '/blog', variant: 'ghost' },
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
                        <DrawerCloseButton />
                        <VStack p={4} justifyContent='space-between'>
                            <NavItemsList navItems={navItems} />
                        </VStack>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </HStack>
    );
}

export default Navbar;
