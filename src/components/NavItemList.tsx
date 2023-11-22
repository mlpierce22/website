import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export type NavItem = {
    name: string,
    path: string,
    variant: string
}

type NavProps = {
    navItems: NavItem[]
}

const NavItemsList = ({ navItems }: NavProps) => {
    const router = useRouter();
    return (
        <>
            {navItems.map((item, index) => {
                return (
                    <Button onClick={() => router.push(item.path)} variant={item.variant} key={`${index}-nav-item`}>{item.name}</Button>
                )
            })
            }
        </>
    )
}

export default NavItemsList;