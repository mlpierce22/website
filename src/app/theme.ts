import {
    type ThemeOverride, extendTheme
} from '@chakra-ui/react'

const config: ThemeOverride = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

export default extendTheme({ config });