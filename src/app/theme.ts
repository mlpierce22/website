import {
    type ThemeOverride, extendTheme, withDefaultColorScheme, theme as baseTheme
} from '@chakra-ui/react'

/** Can import 100->700 (ibm) or 100-900 (poppins) each with italic variant. Import as necessary */
import '@fontsource/ibm-plex-serif/100.css';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/400-italic.css';
import '@fontsource/ibm-plex-serif/700.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';

const config: ThemeOverride = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const fonts = {
    body: '"IBM Plex Serif", sans-serif',
    heading: 'Poppins, sans-serif',
}
const colors = {
    brand: baseTheme.colors.blue,
}

export default extendTheme(
    {
        config, fonts, colors
    },
    withDefaultColorScheme({ colorScheme: 'brand' }));

