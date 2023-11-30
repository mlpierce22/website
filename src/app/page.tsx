'use client'
import { wave } from '@/animations';
import { Heading, VStack, HStack, Link, List, ListItem, ListIcon, Button, Text, Stack, useBreakpoint, Box, useDimensions, Slide, SlideFade } from '@chakra-ui/react';
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons';
import Image from 'next/image'
import NavItemsList, { NavItem } from '@/components/NavItemList';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypeText from '@/components/TypeText';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import TypeParagraph from '@/components/TypeParagraph';

const LetsConnect = () => {
  return (
    <>
      <Heading size="lg" mb={2}>🤝 Let's Connect</Heading>
      <Text>
        Got an idea to share or just want to say hello? Shoot me an <Link href="mailto:mlpierce22@gmail.com" color="teal.500"><EmailIcon mx="2px" /> email</Link> or let's connect on <Link href="https://linkedin.com/in/malapier" isExternal color="teal.500"><AtSignIcon mx="2px" /> LinkedIn</Link>.
      </Text>
    </>
  )
}
const HomePage = () => {

  const breakpoint = useBreakpoint();

  const iconsOnly = breakpoint === 'base' || breakpoint === 'sm';

  const imageButtons: NavItem[] = [
    { id: "view-projects-button", name: 'View Projects', icon: '📚', path: '/projects', variant: 'solid' },
    {
      id: "view-projects-button", name: 'Visit Github', icon: <FaGithub />, path: "https://github.com/mlpierce22", variant: 'solid', isExternal: true
    },
    { id: "connect-linkedin-button", name: 'Connect on LinkedIn', icon: <FaLinkedin />, path: "https://linkedin.com/in/malapier", variant: 'solid', isExternal: true }
  ]

  // const quickFacts = [
  //   { icon: '•', desc: 'Based in San Francisco, CA' },
  //   { icon: '•', desc: 'Former student athlete at UC Santa Cruz' },
  //   { icon: '•', desc: 'Full-stack software engineer with a focus on user experience' },
  //   { icon: '•', desc: 'Experience building ML applications for enterprise' }
  // ];

  // const professionalInterests = [
  //   { icon: '•', desc: 'Innovating with edge technologies' },
  //   { icon: '•', desc: 'Crafting user-centric solutions' },
  //   { icon: '•', desc: 'Contributing to open-source projects' },
  //   { icon: '•', desc: 'Exploring the potential of LLMs' }
  // ];


  const header = useMemo(() => (
    "Hey there, I'm Mason! 👋"
  ), [])

  const introLines = useMemo(() => (
    "I'm a product-minded full-stack software engineer with a passion for building user-centric applications. My core expertise is in frontend specifically as it relates to enterprise with a security focus."
  ), [])

  const hook = useMemo(() => (
    "I'm currently looking for my next opportunity! I'm very interested in working at the intersection of AI and user experience. If you're looking for a software engineer with a passion for building products that people love, let's connect!"
  ), [])

  const typeSpeedSeconds = 1;
  const pageLoadDelaySeconds = 0.5;
  const [turnCounter, setTurnCounter] = useState(0);

  const setNextTurn = (nextTurn: number) => {
    setTurnCounter(nextTurn);
  }

  const isMyTurn = (myPlace: number) => {
    return turnCounter >= myPlace;
  }

  return (
    <VStack p={10} spacing={10}>
      <SlideFade in={isMyTurn(0)} offsetY='20px' transition={{ enter: { duration: 2 } }}>
        <VStack spacing={2}>
          <Box as="div" className='relative justify-self-center self-center w-[300px] h-[186px] sm:w-[400px] sm:h-[286px] md:w-[500px] md:h-[386px] lg:w-[600px] lg:h-[486px]' lineHeight={1.2}>
            <Image style={{ objectFit: 'contain' }} className="rounded-lg" src="/portrait.jpg" fill={true} alt="Mason Pierce" priority />
          </Box>
          <HStack spacing={10} mt={10}>
            <NavItemsList navItems={imageButtons} iconOnly={iconsOnly} size={'lg'} />
          </HStack>
        </VStack>
      </SlideFade>
      <VStack spacing={10}>
        {isMyTurn(0) && (
          <TypeParagraph paragraph={header} typeSpeedSeconds={typeSpeedSeconds} delaySeconds={pageLoadDelaySeconds} doneTypingCallback={() => setNextTurn(1)} align='center'>
            <Heading size={{ base: "lg", md: "3xl" }}>
              {header}
            </Heading>
          </TypeParagraph>
        )}

        {isMyTurn(1) && (
          <TypeParagraph paragraph={introLines} typeSpeedSeconds={typeSpeedSeconds} doneTypingCallback={() => setNextTurn(2)} />
        )}

        {isMyTurn(2) && (
          <TypeParagraph paragraph={hook} typeSpeedSeconds={typeSpeedSeconds} doneTypingCallback={() => setNextTurn(3)} />
        )}

        <SlideFade in={isMyTurn(3)} offsetY='20px' transition={{ enter: { duration: 2 } }}>

        </SlideFade>
      </VStack>
    </VStack>
  );
}

export default HomePage;

