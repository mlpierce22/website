import { VStack, Heading, Box, Text, Link, Card, CardBody, CardFooter, CardHeader, HStack, SlideFade } from "@chakra-ui/react";
import Image from "next/image";
import Tech4GoodWebsite from "../../public/projects/tech4good-website.jpg";
import KahzumWebsite from "../../public/projects/kahzum-website.jpg";
import Tech4GoodCauseway from "../../public/projects/causeway.jpg";
import NavItemsList, { NavItem } from "./NavItemList";
import { useEffect, useState } from "react";
import GradientShadow from "./GradientShadow";

type ImageId = typeof ProjectId[keyof typeof ProjectId]
export type ProjectCardItems = {
    title: string,
    description: string,
    imageId: ImageId,
    buttons: NavItem[]
}

type ProjectCardProps = ProjectCardItems & {
    callback?: () => void
};

export enum ProjectId {
    T4G_WEBSITE = "tech4good-website",
    KAHZUM_WEBSITE = "kahzum-website",
    T4G_CAUSEWAY = "tech4good-causeway",
};

const getProjectImage = (imageId: ImageId) => {
    switch (imageId) {
        case ProjectId.T4G_WEBSITE:
            return Tech4GoodWebsite;
        case ProjectId.KAHZUM_WEBSITE:
            return KahzumWebsite;
        case ProjectId.T4G_CAUSEWAY:
            return Tech4GoodCauseway;
        default:
            return "";
    }
}

const ProjectCard = ({ title, description, imageId, buttons, callback }: ProjectCardProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (callback) callback();
    }, []);
    return (
        <SlideFade in={true} offsetY='100%' transition={{ enter: { duration: 1 } }}>
            <GradientShadow show={show}>
                <Card boxShadow="lg" rounded="lg" variant={"outline"} cursor={"pointer"} onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}>
                    <CardHeader>
                        <Image src={getProjectImage(imageId)} alt={title} priority />
                    </CardHeader>
                    <CardBody>
                        <VStack align="stretch" spacing={2}>
                            <Heading size="lg">{title}</Heading>
                            <Text fontSize="sm">{description}</Text>
                        </VStack>
                    </CardBody>
                    <CardFooter>
                        <HStack spacing={2}>
                            <NavItemsList navItems={buttons}></NavItemsList>
                        </HStack>
                    </CardFooter>
                </Card>
            </GradientShadow>
        </SlideFade>
    );
};

export default ProjectCard;