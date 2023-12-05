'use client'
import { wave } from '@/animations';
import { Heading, VStack, HStack, useBreakpoint, Box, SlideFade, Text } from '@chakra-ui/react';
import Image from 'next/image'
import NavItemsList, { NavItem } from '@/components/NavItemList';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useMemo } from 'react';
import { useTurnBasedRender } from '@/hooks/useTurnBasedRender';
import TypeIncrementally from '@/components/TypeIncrementally';

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

  const header = useMemo(() => (
    "Hey there, I'm Mason!"
  ), [])

  const intro = useMemo(() => (
    "I'm a product-minded full-stack software engineer with a passion for building user-centric applications. My core expertise over the years has been in cutting-edge frontend experiences for enterprise - whether that be running AI in the browser or optimizing the performance of existing interfaces."
  ), [])

  const hook = useMemo(() => (
    "I'm currently looking for my next opportunity! I'm very interested in working at the intersection of AI and user experience. If you're looking for a software engineer with a passion for building products that people love, let's connect!"
  ), [])

  const pageLoadDelaySeconds = 0.5;
  const { setNextTurn, isMyTurn } = useTurnBasedRender();

  return (
    <VStack p={10} spacing={10}>
      <SlideFade in={isMyTurn(0)} offsetY='20px' transition={{ enter: { duration: 2 } }}>
        <VStack spacing={2}>
          <Box as="div" className='relative justify-self-center self-center w-[300px] h-[186px] sm:w-[400px] sm:h-[286px] md:w-[500px] md:h-[386px] lg:w-[600px] lg:h-[486px]' lineHeight={1.2}>
            <Image style={{ objectFit: 'contain' }} className="rounded-lg" src="/portrait.jpg" fill={true} alt="Mason Pierce" priority />
          </Box>
          <HStack spacing={10} mt={10}>
            <NavItemsList navItems={imageButtons} iconOnly={iconsOnly} size={'lg'} showGradient={true} />
          </HStack>
        </VStack>
      </SlideFade>
      <VStack spacing={10} className='max-w-6xl' minHeight={"50vh"}>
        {isMyTurn(0) && (
          <Heading size={{ base: "lg", md: "3xl" }} className='leading-snug'>
            <TypeIncrementally text={header} typingSpeed={50} endEmoji='👋' delaySeconds={pageLoadDelaySeconds} doneTyping={() => setNextTurn(1)} />
          </Heading>
        )}

        {isMyTurn(1) && (
          <Text fontSize={{ base: "md", md: "2xl" }} className='leading-snug w-full'>
            <TypeIncrementally text={intro} typingSpeed={10} doneTyping={() => setNextTurn(2)} />
          </Text>
        )}

        {isMyTurn(2) && (
          <Text fontSize={{ base: "md", md: "2xl" }} className='leading-snug w-full'>
            <TypeIncrementally text={hook} typingSpeed={10} doneTyping={() => setNextTurn(3)} />
          </Text>
        )}

        <SlideFade in={isMyTurn(3)} offsetY='20px' transition={{ enter: { duration: 2 } }}>

        </SlideFade>
      </VStack>
    </VStack>
  );
}

export default HomePage;

