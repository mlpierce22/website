import { type ThemeConfig, extendTheme } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

export default extendTheme({ config });