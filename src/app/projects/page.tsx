'use client'
import { Box, SimpleGrid, Text, Link, Image, VStack, Heading } from '@chakra-ui/react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from "../../utils/project-helpers"
import { useMemo } from 'react';
import { useTurnBasedRender } from '@/hooks/useTurnBasedRender';
import TypeIncrementally from '@/components/TypeIncrementally';

const ProjectsPage = () => {
  const { setNextTurn, isMyTurn } = useTurnBasedRender(100);

  const header = useMemo(() => (
    "My Work"
  ), [])

  const typeSpeedSeconds = 1;
  const pageLoadDelaySeconds = 0.5;

  return (
    <VStack p={10} spacing={10} width={"100%"}>
      <Heading as="h1" size={{ base: "md", sm: "lg", lg: "xl" }} className='leading-snug whitespace-nowrap' fontFamily={"sans-serif"} fontWeight={"700"}>
        <TypeIncrementally text={header} typingSpeed={50} delaySeconds={pageLoadDelaySeconds} endEmoji={'👨‍💻'} doneTyping={() => setNextTurn(1)} />
      </Heading>

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