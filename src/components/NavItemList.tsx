import { Button, ThemingProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export type NavItem = {
    id: string,
    name: string,
    path: string,
    variant: "solid" | "outline" | "ghost" | "link",
    icon?: any,
    size?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    isExternal?: boolean
}

type NavProps = {
    navItems: NavItem[]
    iconOnly?: boolean
    size?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
}

const NavItemsList = ({ navItems, iconOnly, size }: NavProps) => {
    const router = useRouter();
    const navigate = (path: string, isExternal: boolean) => {
        if (isExternal) {
            window.open(path, '_blank');
        } else {
            router.push(path);
        }
    }
    return (
        <>
            {navItems.map((item, index) => {
                return item.icon && !item.name || iconOnly ?
                    <Button onClick={() => navigate(item.path, !!item.isExternal)} key={`${index}-${item.id}-nav-icon`} size={size}>{item.icon}</Button>
                    :
                    <Button leftIcon={item.icon || ''} onClick={() => navigate(item.path, !!item.isExternal)} variant={item.variant} key={`${index}-${item.id}-nav-item`} size={size}>{item.name}</Button>
            })
            }
        </>
    )
}

export default NavItemsList;