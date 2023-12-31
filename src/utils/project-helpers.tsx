import { ProjectCardItems } from '@/components/ProjectCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Tech4GoodWebsite from "../../public/projects/header-images/cropped-tech4good-website.png";
import KahzumWebsite from "../../public/projects/header-images/cropped-kahzum-website.png";
import Tech4GoodCauseway from "../../public/projects/header-images/cropped-causeway.png";
import CamioWebsite from "../../public/projects/header-images/cropped-camio-website.png";
import GptWeightlifting from "../../public/projects/header-images/gpt-weightlifting.png";
import GptSitesmith from "../../public/projects/header-images/gpt-sitesmith.png";
import GptCoverLetter from "../../public/projects/header-images/gpt-cover-letter.png";
import GptLingoAmigo from "../../public/projects/header-images/gpt-lingo-amigo.png";
import Segmentation from "../../public/projects/header-images/segmentation.png";

type ImageId = typeof ProjectId[keyof typeof ProjectId]

enum ProjectId {
    T4G_WEBSITE = "tech4good-website",
    KAHZUM_WEBSITE = "kahzum",
    T4G_CAUSEWAY = "tech4good-causeway",
    CAMIO_WEBSITE = "camio-website",
    GPT_WEIGHTLIFTING = "gpt-weightlifting",
    GPT_SITESMITH = "gpt-sitesmith",
    GPT_COVER_LETTER = "gpt-cover-letter",
    GPT_LINGO_AMIGO = "gpt-lingo-amigo",
    SEGMENTATION = "segmentation",
};

const getProjectImage = (imageId: ImageId) => {
    switch (imageId) {
        case ProjectId.T4G_WEBSITE:
            return Tech4GoodWebsite;
        case ProjectId.KAHZUM_WEBSITE:
            return KahzumWebsite;
        case ProjectId.T4G_CAUSEWAY:
            return Tech4GoodCauseway;
        case ProjectId.CAMIO_WEBSITE:
            return CamioWebsite;
        case ProjectId.GPT_WEIGHTLIFTING:
            return GptWeightlifting;
        case ProjectId.GPT_SITESMITH:
            return GptSitesmith;
        case ProjectId.GPT_COVER_LETTER:
            return GptCoverLetter;
        case ProjectId.GPT_LINGO_AMIGO:
            return GptLingoAmigo;
        case ProjectId.SEGMENTATION:
            return Segmentation;
        default:
            return "";
    }
}
const projects: ProjectCardItems[] = [
    {
        title: "Camio Website",
        description: "The website for Camio - an AI search and alert engine for video.",
        imageId: ProjectId.CAMIO_WEBSITE,
        buttons: [
            {
                id: "visit-camio",
                name: "Visit Camio",
                path: "https://camio.com",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "In-Browser Segmentation",
        description: "A fun demo that utilizes WASM to run real-time segmentation in the browser utilizing the SAM model.",
        imageId: ProjectId.SEGMENTATION,
        buttons: [
            {
                id: "segmentation",
                name: "Play with a demo",
                path: "https://app.test.camio.com",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Tech4Good Lab Website",
        description: "A website for the Tech4Good lab - a lab focused on using social computing to support community work.",
        imageId: ProjectId.T4G_WEBSITE,
        buttons: [
            {
                id: "go-to-t4g-website",
                name: "Visit Tech4Good",
                path: "https://tech4good.soe.ucsc.edu",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Causeway",
        description: "An app for learning web development while simultaneously contributing to real-world, underserved community projects through micro-role hierarchies.",
        imageId: ProjectId.T4G_CAUSEWAY,
        buttons: [
            {
                id: "go-to-causeway",
                name: "Try Causeway",
                path: "https://causeway.soe.ucsc.edu",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Kahzum",
        description: "A startup I launched in college that helped small businesses better understand in-store customer behavior. Eventually it pivoted to be a same-day delivery solution for small business during the pandemic.",
        imageId: ProjectId.KAHZUM_WEBSITE,
        buttons: [
            {
                id: "go-to-routing-algorithm",
                name: "Routing Algorithm",
                path: "https://mlpierce22.github.io/kahzum-route-organizer/",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Get Me Into Weightlifting",
        description: "An OpenAI GPT assisting beginner users in starting their weightlifting journey.",
        imageId: ProjectId.GPT_WEIGHTLIFTING,
        buttons: [
            {
                id: "try-weightlifting-gpt",
                name: "Get started weightlifting",
                path: "https://chat.openai.com/g/g-qQVpDNs1i-get-me-into-weight-lifting",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "SiteSmith",
        description: "An OpenAI GPT designed to help you plan out what to put on your personal portfolio website.",
        imageId: ProjectId.GPT_SITESMITH,
        buttons: [
            {
                id: "try-sitesmith",
                name: "Plan your portfolio site",
                path: "https://chat.openai.com/g/g-GBXMSmJIY-sitesmith",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Cover Letter Composer",
        description: "An OpenAI GPT designed to craft professional cover letters.",
        imageId: ProjectId.GPT_COVER_LETTER,
        buttons: [
            {
                id: "try-cover-letter-composer",
                name: "Compose a cover letter",
                path: "https://chat.openai.com/g/g-KAKbAzgBD-cover-letter-composer",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },

        ],
    },
    {
        title: "Lingo Amigo",
        description: "An OpenAI GPT designed to help you conversationally learn Spanish.",
        imageId: ProjectId.GPT_LINGO_AMIGO,
        buttons: [
            {
                id: "try-lingo-amigo",
                name: "Practice Spanish",
                path: "https://chat.openai.com/g/g-EByaIrvso-lingo-amigo",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },

        ],
    },
];

export { projects, getProjectImage, ProjectId, type ImageId };