"use client"
import { Box, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <VStack w={"100%"} h={"100%"}>
            <Button leftIcon={<IoMdArrowBack />} onClick={() => router.back()} alignSelf={"start"} mt={10}>Back</Button>
            <Box as="div" p={10} className="prose md:prose-xl prose-stone dark:prose-invert overflow-scroll">
                {children}
            </Box>
        </VStack>
    )
}