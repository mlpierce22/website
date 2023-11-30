'use client'
import { wave } from '@/animations';
import { Heading, VStack, HStack, Link, List, ListItem, ListIcon, Button, Text, Stack, useBreakpoint, Box, useDimensions } from '@chakra-ui/react';
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons';
import Image from 'next/image'
import { NavItem } from '@/components/NavItemList';
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

  const quickFacts = [
    { icon: '•', desc: 'Based in San Francisco, CA' },
    { icon: '•', desc: 'Former student athlete at UC Santa Cruz' },
    { icon: '•', desc: 'Full-stack software engineer with a focus on user experience' },
    { icon: '•', desc: 'Experience building ML applications for enterprise' }
  ];

  const professionalInterests = [
    { icon: '•', desc: 'Innovating with edge technologies' },
    { icon: '•', desc: 'Crafting user-centric solutions' },
    { icon: '•', desc: 'Contributing to open-source projects' },
    { icon: '•', desc: 'Exploring the potential of LLMs' }
  ];


  const header = useMemo(() => (
    "Hey there, I'm Mason!"
  ), [])

  const introLines = useMemo(() => (
    "I'm a product-minded full-stack software engineer with a passion for building user-centric applications. My core expertise is in frontend specifically as it relates to enterprise with a security focus."
  ), [])

  // const introLines = useMemo(() => ([
  //   "I'm a product-minded full-stack",
  //   "software engineer with a passion",
  //   "for building user-centric applications.",
  //   "My core expertise is in frontend",
  //   "specifically as it relates to enterprise",
  //   "with a security focus."
  // ]), [])

  const hook = useMemo(() => (
    "I'm currently looking for my next opportunity! I'm very interested in working at the intersection of AI and user experience. If you're looking for a software engineer with a passion for building products that people love, let's connect!"
  ), [])

  const typeSpeedSeconds = 1;
  const pageLoadDelaySeconds = 0.5;
  const [turnCounter, setTurnCounter] = useState(0);

  const setNextTurn = (nextTurn: number) => {
    setTurnCounter(turnCounter + 1);
  }

  const isMyTurn = (myPlace: number) => {
    return turnCounter >= myPlace;
  }

  // TODO: Keep track of when typing is done and then render the next section rather than relying on timing which is fragile

  return (
    <VStack p={10} spacing={10}>
      <Box as="div" className='relative justify-self-center self-center w-[300px] h-[186px] sm:w-[400px] sm:h-[286px] md:w-[500px] md:h-[386px] lg:w-[600px] lg:h-[486px]' lineHeight={1.2}>
        <Image style={{ objectFit: 'contain' }} className="rounded-lg" src="/portrait.jpg" fill={true} alt="Mason Pierce" priority />
      </Box>
      <VStack spacing={10}>
        <TypeParagraph paragraph={header} typeSpeedSeconds={typeSpeedSeconds} delaySeconds={pageLoadDelaySeconds} doneTypingCallback={() => setNextTurn(1)} align='center'>
          <Heading size={{ base: "lg", md: "3xl" }}>
            {header}
          </Heading>
        </TypeParagraph>
        {/* <TypeText steps={header.length} typeSpeedSeconds={typeSpeedSeconds} delaySeconds={pageLoadDelaySeconds} doneTyping={() => setNextTurn(1)}>
          <Heading size={{ base: "lg", md: "3xl" }}>
            {header}
          </Heading>
        </TypeText> */}
        {isMyTurn(1) && (
          <TypeParagraph paragraph={introLines} typeSpeedSeconds={typeSpeedSeconds} doneTypingCallback={() => setNextTurn(2)} />
        )}

        {isMyTurn(2) && (
          <TypeParagraph paragraph={hook} typeSpeedSeconds={typeSpeedSeconds} doneTypingCallback={() => setNextTurn(3)} />
        )}
      </VStack>
    </VStack>
    // <VStack p={10} spacing={10} overflow={'scroll'} className='text-xl'>
    //   <VStack spacing={4}>
    //     <HStack spacing={5}>
    //       <Heading size={{ base: "lg", md: "2xl" }}>Hey there, I'm Mason!</Heading>
    //       <Image src="/wave-animated.gif" alt="Mason Pierce" width={iconsOnly ? 30 : 50} height={iconsOnly ? 30 : 50} priority />
    //     </HStack>
    //     <Text fontSize="lg">Welcome to my corner of the internet</Text>
    //   </VStack>
    //   <Stack spacing={8} direction={{ base: "column", lg: "row" }}>
    //     <VStack>
    //       <Box as="div" className='relative justify-self-center self-center w-[300px] h-[186px] sm:w-[400px] sm:h-[286px] md:w-[500px] md:h-[386px] lg:w-[600px] lg:h-[486px]'>
    //         <Image style={{ objectFit: 'contain' }} className="rounded-lg" src="/portrait.jpg" fill={true} alt="Mason Pierce" priority />
    //       </Box>
    //       <HStack spacing={2}>
    //         <NavItemsList navItems={imageButtons} iconOnly={iconsOnly} />
    //       </HStack>
    //     </VStack>
    //     <VStack align={"start"} justify={"start"} spacing={4}>
    //       <HighlightList highlightList={quickFacts} title={"⚡️ Quick Facts"}></HighlightList>
    //       <HighlightList highlightList={professionalInterests} title={"👨‍💻 Professional Interests"}></HighlightList>
    //       <LetsConnect></LetsConnect>
    //     </VStack>
    //   </Stack>
    // </VStack>
  );
}

export default HomePage;

