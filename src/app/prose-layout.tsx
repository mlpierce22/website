"use client"
import { Box, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <VStack p={10} width={"100vw"}>
            <Box as="div" className="prose md:prose-xl prose-stone dark:prose-invert overflow-scroll" >
                <Button variant="solid" leftIcon={<IoMdArrowBack />} mb={10} width={"100%"} onClick={() => router.push("/projects")}>To Projects</Button>
                {children}
                <Button variant="solid" leftIcon={<IoMdArrowBack />} mt={10} width={"100%"} onClick={() => router.push("/projects")}>To Projects</Button>
            </Box >
        </VStack>
    )
}