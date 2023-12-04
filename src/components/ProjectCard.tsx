import { VStack, Heading, Box, Text, Link, Card, CardBody, CardFooter, CardHeader, HStack, SlideFade, Button, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import { ImageId, getProjectImage } from "@/utils/project-helpers";
import NavItemsList, { NavItem } from "./NavItemList";
import { useEffect, useState } from "react";
import GradientShadow from "./GradientShadow";
import { useRouter } from "next/navigation";

export type ProjectCardItems = {
    title: string,
    description: string,
    imageId: ImageId,
    buttons: NavItem[]
}

type ProjectCardProps = ProjectCardItems & {
    callback?: () => void
};

const ProjectCard = ({ title, description, imageId, buttons, callback }: ProjectCardProps) => {
    const router = useRouter();

    useEffect(() => {
        if (callback) callback();
    }, [callback]);
    return (
        <SlideFade in={true} offsetY='100%' transition={{ enter: { duration: 1 } }} className="h-full">
            <GradientShadow show={true}>
                <Card boxShadow="lg" rounded="lg" variant={"outline"} cursor={"pointer"}
                    onClick={() => router.push(`/projects/${imageId}`)}
                    width={"100%"} height={"100%"}>
                    <CardHeader >
                        <Box as="div" className="flex h-48 overflow-hidden justify-center items-center">
                            <Image src={getProjectImage(imageId)} alt={title} priority />
                        </Box>
                    </CardHeader>
                    <CardBody>
                        <VStack align="stretch" spacing={2}>
                            <Heading size={{ base: "md", md: "lg" }}>{title}</Heading>
                            <Text fontSize={{ base: "md", md: "lg" }}>{description}</Text>
                        </VStack>
                    </CardBody>
                    <CardFooter>
                        <HStack spacing={2} wrap={"wrap"}>
                            <Button
                                size={{ base: "md", lg: "lg" }}
                                id={`learn-more-${imageId}`} onClick={(e) => {
                                    e.stopPropagation()
                                    router.push(`/projects/${imageId}`)
                                }}
                                variant="outline">Learn More</Button>
                            <NavItemsList navItems={buttons} size={{ base: "md", lg: "lg" }}></NavItemsList>
                        </HStack>
                    </CardFooter>
                </Card>
            </GradientShadow>
        </SlideFade>
    );
};

export default ProjectCard;