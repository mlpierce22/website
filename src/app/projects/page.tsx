'use client'
import { Box, SimpleGrid, Text, Link, Image, VStack, Heading } from '@chakra-ui/react';
import ProjectCard, { ProjectCardItems, ProjectId } from '@/components/ProjectCard';
import { useMemo } from 'react';
import { useTurnBasedRender } from '@/hooks/useTurnBasedRender';
import TypeParagraph from '@/components/TypeParagraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// Projects Page Component
const ProjectsPage = () => {
  const projects: ProjectCardItems[] = [];
  for (let i = 0; i < 10; i++) {
    projects.push({
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
        {
          id: "learn-more-t4g-website",
          name: "Learn More",
          path: "/projects/tech4good-website",
          variant: "outline",
        },
      ],
    });
  }

  const { setNextTurn, isMyTurn } = useTurnBasedRender(100);

  const header = useMemo(() => (
    "Projects made with ❤️"
  ), [])

  const typeSpeedSeconds = 1;
  const pageLoadDelaySeconds = 0.5;

  return (
    <VStack p={10} spacing={10}>
      <TypeParagraph paragraph={header} typeSpeedSeconds={typeSpeedSeconds} delaySeconds={pageLoadDelaySeconds} doneTypingCallback={() => setNextTurn(1)} align='center'>
        <Heading size={{ base: "lg", sm: "xl", lg: "3xl" }} className='leading-snug'>
          {header}
        </Heading>
      </TypeParagraph>

      <SimpleGrid columns={{ base: 1, lg: 2, "2xl": 3 }} spacing={10} maxW={"2000px"}>
        {projects.map((project, index) => (
          <Box as="div" key={index}>
            {isMyTurn(index + 1) && (
              <ProjectCard  {...project} callback={() => setNextTurn(index + 2)} />
            )}
          </Box>
        ))}
      </SimpleGrid>
    </VStack >
  );
};

export default ProjectsPage;