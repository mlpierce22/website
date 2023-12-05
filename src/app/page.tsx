'use client'
import { wave } from '@/animations';
import { Heading, VStack, HStack, useBreakpoint, Box, SlideFade, Text, AspectRatio, Stack, ButtonProps, useColorMode } from '@chakra-ui/react';
import Image from 'next/image'
import NavItemsList, { NavItem } from '@/components/NavItemList';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useMemo } from 'react';
import { useTurnBasedRender } from '@/hooks/useTurnBasedRender';
import TypeIncrementally from '@/components/TypeIncrementally';
import Portrait from '../../public/portrait.jpg';


const HomePage = () => {
  const { colorMode } = useColorMode();
  const customButtonProps: ButtonProps = {
    fontSize: { base: "md", md: "xl", lg: "2xl", xl: "2xl", "2xl": "3xl" },
    color: colorMode === "dark" ? "skyblue" : "deepskyblue",
  };

  const imageButtons: NavItem[] = [
    { id: "view-projects-button", name: 'View Projects', icon: <FaArrowRight />, path: '/projects', variant: 'link', customButtonProps },
    {
      id: "view-projects-button", name: 'Visit Github', icon: <FaArrowRight />, path: "https://github.com/mlpierce22", variant: 'link', isExternal: true, customButtonProps
    },
    { id: "connect-linkedin-button", name: 'Connect on LinkedIn', icon: <FaArrowRight />, path: "https://linkedin.com/in/malapier", variant: 'link', isExternal: true, customButtonProps }
  ]

  const header = useMemo(() => (
    "Hi, I'm Mason!"
  ), [])

  const intro = useMemo(() => (
    "I'm a product-minded full-stack software engineer with a passion for building user-centric applications. My core expertise over the years has been in cutting-edge frontend experiences for enterprise - whether that be running AI in the browser or optimizing the performance of existing interfaces."
  ), [])

  const hook = useMemo(() => (
    "I'm currently looking for my next opportunity! I'm very interested in working at the intersection of AI and user experience. If you're looking for a software engineer with a passion for building products that people love, let's connect!"
  ), [])

  const pageLoadDelaySeconds = 0.5;
  const { setNextTurn, isMyTurn } = useTurnBasedRender();

  const responsiveFontSize = { base: "md", md: "lg", xl: "xl", "2xl": "2xl" };

  return (
    <Stack spacing={10} p={10} width={"100vw"} justifyContent={"center"} direction={{ base: "column", xl: "row" }}>
      <SlideFade in={isMyTurn(0)} offsetY='20px' transition={{ enter: { duration: 2 } }} className='flex flex-col items-center'>
        <Box as="div" width={{ base: "70vw", lg: "50vw" }} className='max-w-4xl'>
          <AspectRatio ratio={4 / 3}>
            <Image className="rounded-lg" src={Portrait} alt="Mason Pierce" priority />
          </AspectRatio>
        </Box>
      </SlideFade>
      <Stack width={"100%"} height={"100%"} alignSelf={"start"} spacing={10} direction={"column"} className='max-w-7xl'>
        <VStack spacing={5} alignItems={{ base: "center", xl: "start" }} height={"50%"} width={"100%"}>
          {isMyTurn(0) && (
            <Heading size={{ base: "lg", md: "xl", xl: "2xl" }} className='leading-snug'>
              <TypeIncrementally text={header} typingSpeed={50} endEmoji='👋' delaySeconds={pageLoadDelaySeconds} doneTyping={() => setNextTurn(1)} />
            </Heading>
          )}

          {isMyTurn(1) && (
            <Text fontSize={responsiveFontSize} className='leading-snug w-full'>
              <TypeIncrementally text={intro} typingSpeed={10} doneTyping={() => setNextTurn(2)} />
            </Text>
          )}

          {isMyTurn(2) && (
            <Text fontSize={responsiveFontSize} className='leading-snug w-full'>
              <TypeIncrementally text={hook} typingSpeed={10} doneTyping={() => setNextTurn(3)} />
            </Text>
          )}
        </VStack>
        <SlideFade in={isMyTurn(3)} offsetY='20px' transition={{ enter: { duration: 2 } }} className='w-full h-full'>
          <Stack direction={{ base: "row", xl: "column" }} spacing={7} alignSelf={"start"} alignItems={"start"} justifyContent={{ base: "center" }} height={"50%"}>
            <NavItemsList navItems={imageButtons} size={{ base: "md", md: "lg", xl: "lg" }} />
          </Stack>
        </SlideFade>
      </Stack>
    </Stack>
  );
}

export default HomePage;

