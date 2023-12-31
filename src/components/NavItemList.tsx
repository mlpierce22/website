import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import GradientShadow from './GradientShadow';

export type NavItem = {
    id: string,
    name: string,
    path: string,
    variant: "solid" | "outline" | "ghost" | "link",
    icon?: any,
    isExternal?: boolean
    customButtonProps?: ButtonProps,
    noPadding?: boolean,
}

type Sizes = "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
type NavProps = {
    navItems: NavItem[]
    iconOnly?: boolean
    size?: Sizes | { [key in (Sizes | "base")]?: Sizes }
    showGradient?: boolean
    callbackWhenClicked?: (path: string) => void
}

const NavItemsList = ({ navItems, iconOnly, size, showGradient, callbackWhenClicked }: NavProps) => {
    const router = useRouter();
    const navigate = (path: string, isExternal: boolean, event: any) => {
        event.stopPropagation();
        if (callbackWhenClicked) callbackWhenClicked(path);
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
                    <GradientShadow show={!!showGradient} key={`${index}-${item.id}-nav-icon`} fit={true}>
                        <Button className={item.noPadding ? "!p-0" : ''} onClick={(e) => navigate(item.path, !!item.isExternal, e)} size={size} {...item.customButtonProps}>{item.icon}</Button>
                    </GradientShadow>
                    :
                    <GradientShadow show={!!showGradient} key={`${index}-${item.id}-nav-item`} fit={true}>
                        <Button className={item.noPadding ? "!p-0" : ''} leftIcon={item.icon || ''} onClick={(e) => navigate(item.path, !!item.isExternal, e)} variant={item.variant} size={size} {...item.customButtonProps}>{item.name}</Button>
                    </GradientShadow>
            })
            }
        </>
    )
}

export default NavItemsList;