import { Box } from "@chakra-ui/react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {

    return (
        <Box as="div" p={10} className="prose md:prose-xl prose-stone dark:prose-invert">
            {children}
        </Box>
    )
}