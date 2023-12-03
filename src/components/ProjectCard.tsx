import { VStack, Heading, Box, Text, Link, Card, CardBody, CardFooter, CardHeader, HStack, SlideFade, Button } from "@chakra-ui/react";
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
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (callback) callback();
    }, []);
    return (
        <SlideFade in={true} offsetY='100%' transition={{ enter: { duration: 1 } }} className="h-full">
            <GradientShadow show={show}>
                <Card boxShadow="lg" rounded="lg" variant={"outline"} cursor={"pointer"} onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onClick={() => router.push(`/projects/${imageId}`)}
                    width={"100%"} height={"100%"}>
                    <CardHeader >
                        <Box as="div" className="flex h-48 overflow-hidden justify-center items-center">
                            <Image src={getProjectImage(imageId)} alt={title} priority />
                        </Box>
                    </CardHeader>
                    <CardBody>
                        <VStack align="stretch" spacing={2}>
                            <Heading size="lg">{title}</Heading>
                            <Text fontSize="sm">{description}</Text>
                        </VStack>
                    </CardBody>
                    <CardFooter>
                        <HStack spacing={2}>
                            <Button id={`learn-more-${imageId}`} onClick={(e) => {
                                e.stopPropagation()
                                router.push(`/projects/${imageId}`)
                            }}
                                variant="outline">Learn More</Button>
                            <NavItemsList navItems={buttons}></NavItemsList>
                        </HStack>
                    </CardFooter>
                </Card>
            </GradientShadow>
        </SlideFade>
    );
};

export default ProjectCard;