'use client'
import { Box, SimpleGrid, Text, Link, Image, VStack, Heading } from '@chakra-ui/react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from "../../utils/project-helpers"
import { useMemo } from 'react';
import { useTurnBasedRender } from '@/hooks/useTurnBasedRender';
import TypeParagraph from '@/components/TypeParagraph';

const ProjectsPage = () => {
  const { setNextTurn, isMyTurn } = useTurnBasedRender(100);

  const header = useMemo(() => (
    "Projects made with ❤️"
  ), [])

  const typeSpeedSeconds = 1;
  const pageLoadDelaySeconds = 0.5;

  return (
    <VStack p={10} spacing={10} >
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