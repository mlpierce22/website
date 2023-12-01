import { ProjectCardItems } from '@/components/ProjectCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Tech4GoodWebsite from "../../public/projects/tech4good-website.jpg";
import KahzumWebsite from "../../public/projects/kahzum-website.jpg";
import Tech4GoodCauseway from "../../public/projects/causeway.jpg";
import CamioWebsite from "../../public/projects/camio-website.png";
import GptWeightlifting from "../../public/projects/gpt-weightlifting.png";
import GptSitesmith from "../../public/projects/gpt-sitesmith.png";
import GptCoverLetter from "../../public/projects/gpt-cover-letter.png";
import GptLingoAmigo from "../../public/projects/gpt-lingo-amigo.png";
import GithubProjects from "../../public/projects/github-projects.png";

type ImageId = typeof ProjectId[keyof typeof ProjectId]

enum ProjectId {
    T4G_WEBSITE = "tech4good-website",
    KAHZUM_WEBSITE = "kahzum-website",
    T4G_CAUSEWAY = "tech4good-causeway",
    CAMIO_WEBSITE = "camio-website",
    GPT_WEIGHTLIFTING = "gpt-weightlifting",
    GPT_SITESMITH = "gpt-sitesmith",
    GPT_COVER_LETTER = "gpt-cover-letter",
    GPT_LINGO_AMIGO = "gpt-lingo-amigo",
    GITHUB_PROJECTS = "github-projects",
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
        case ProjectId.GITHUB_PROJECTS:
            return GithubProjects;
        default:
            return "";
    }
}
const projects: ProjectCardItems[] = [
    {
        title: "Tech4Good Lab Website",
        description: "A website for a lab focused on technology for social good.",
        imageId: ProjectId.T4G_WEBSITE,
        buttons: [
            {
                id: "go-to-t4g-website",
                name: "Check out the site",
                path: "https://tech4good.soe.ucsc.edu",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Camio Website",
        description: "An innovative website providing smart camera services.",
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
        title: "Causeway",
        description: "An app for learning through micro-role hierarchies.",
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
        title: "Get Me Into Weightlifting",
        description: "An OpenAI GPT model assisting users in starting their weightlifting journey.",
        imageId: ProjectId.GPT_WEIGHTLIFTING,
        buttons: [
            {
                id: "try-weightlifting-gpt",
                name: "Try the App",
                path: "https://chat.openai.com/g/g-qQVpDNs1i-get-me-into-weight-lifting",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "SiteSmith",
        description: "A GPT model designed to help with website creation and design.",
        imageId: ProjectId.GPT_SITESMITH,
        buttons: [
            {
                id: "try-sitesmith",
                name: "Try SiteSmith",
                path: "https://chat.openai.com/g/g-GBXMSmJIY-sitesmith",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },
        ],
    },
    {
        title: "Cover Letter Composer",
        description: "A GPT application for crafting professional cover letters.",
        imageId: ProjectId.GPT_COVER_LETTER,
        buttons: [
            {
                id: "try-cover-letter-composer",
                name: "Try the App",
                path: "https://chat.openai.com/g/g-KAKbAzgBD-cover-letter-composer",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },

        ],
    },
    {
        title: "Lingo Amigo",
        description: "A language learning assistant powered by GPT technology.",
        imageId: ProjectId.GPT_LINGO_AMIGO,
        buttons: [
            {
                id: "try-lingo-amigo",
                name: "Try Lingo Amigo",
                path: "https://chat.openai.com/g/g-EByaIrvso-lingo-amigo",
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },

        ],
    },
    // TODO: Remove this and list specific projects
    {
        title: "GitHub Projects",
        description: "Various projects and experiments hosted on GitHub.",
        imageId: ProjectId.GITHUB_PROJECTS,
        buttons: [
            {
                id: "view-github",
                name: "View on GitHub",
                path: "https://github.com/yourusername", // Replace with your GitHub profile URL
                variant: "outline",
                icon: <ExternalLinkIcon />,
                isExternal: true,
            },

        ],
    },
    {
        title: "Kahzum - College Startup",
        description: "A startup I launched in college that unfortunately didn't succeed.",
        imageId: ProjectId.KAHZUM_WEBSITE,
        buttons: [],
    },
];

export { projects, getProjectImage, ProjectId, type ImageId };