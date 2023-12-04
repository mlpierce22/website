import {
    type ThemeOverride, extendTheme, withDefaultColorScheme, theme as baseTheme, withDefaultSize
} from '@chakra-ui/react'

// Slider
import 'keen-slider/keen-slider.min.css'

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
    body: 'Poppins, sans-serif',
    heading: '"IBM Plex Serif", sans-serif',
}
const colors = {
    brand: baseTheme.colors.purple,
    // brand: {
    //     50: "#f9f9f9",
    //     100: "#ededed",
    //     200: "#e1e1e1",
    //     300: "#d3d3d3",
    //     400: "#c4c4c4",
    //     500: "#b3b3b3",
    //     600: "#a0a0a0",
    //     700: "#898989",
    //     800: "#6c6c6c",
    //     900: "#3f3f3f",
    // }
}

export default extendTheme(
    {
        config, fonts, colors
    },
    // withDefaultColorScheme({ colorScheme: 'brand' }),
    withDefaultSize({ size: 'lg' })
);

