'use client'
import { wave } from '@/animations';
import { Heading, VStack, HStack, Link, List, ListItem, ListIcon, Button, Text, Stack, useBreakpoint } from '@chakra-ui/react';
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons';
import Image from 'next/image'
import NavItemsList, { NavItem } from '@/components/NavItemList';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HighlightList from '@/components/HighlightList';

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
  const imageButtons: NavItem[] = [
    { name: 'View Projects', icon: '📚', path: '/projects', variant: 'solid' },
    {
      name: 'Visit Github', icon: <FaGithub />, path: "https://github.com/mlpierce22", variant: 'solid', isExternal: true
    },
    { name: 'Connect on LinkedIn', icon: <FaLinkedin />, path: "https://linkedin.com/in/malapier", variant: 'solid', isExternal: true }
  ]

  const quickFacts = [
    { icon: '📍', desc: 'Based in San Francisco, CA' },
    { icon: '🏅', desc: 'Former student athlete at UC Santa Cruz' },
    { icon: '🚀', desc: 'Full-stack software engineer with a focus on user experience' },
    { icon: '🤖', desc: 'Experience building ML applications for enterprise' }
  ];

  const professionalInterests = [
    { icon: '🔬', desc: 'Innovating with edge technologies' },
    { icon: '💡', desc: 'Crafting user-centric solutions' },
    { icon: '🌐', desc: 'Contributing to open-source projects' },
    { icon: '🧠', desc: 'Exploring the potential of LLMs' }
  ];

  return (
    <VStack p={10} spacing={10} overflow={'scroll'} className='text-xl'>
      <VStack spacing={4}>
        <HStack spacing={5}>
          <Heading size="2xl">Hey there, I'm Mason!</Heading>
          <Image src="/wave-animated.gif" alt="Mason Pierce" width={50} height={50} priority />
        </HStack>
        <Text fontSize="lg">Welcome to my corner of the internet</Text>
      </VStack>
      <Stack spacing={8} direction={{ base: "column", lg: "row" }}>
        <VStack>
          <Image className="rounded-lg justify-self-center self-center" src="/portrait.jpg" alt="Mason Pierce" width={500} height={500} priority />
          <HStack spacing={2}>
            <NavItemsList navItems={imageButtons} />
          </HStack>
        </VStack>
        <VStack align={"start"} justify={"start"} spacing={4}>
          <HighlightList highlightList={quickFacts} title={"⚡️ Quick Facts"}></HighlightList>
          <HighlightList highlightList={professionalInterests} title={"👨‍💻 Professional Interests"}></HighlightList>
          <LetsConnect></LetsConnect>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default HomePage;

