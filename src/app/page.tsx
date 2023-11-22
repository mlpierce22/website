'use client'
import { wave } from '@/animations';
import { Heading, VStack, Text, Link, HStack } from '@chakra-ui/layout';

const HomePage = () => {
  return (
    <VStack p={5}>
      <HStack>
        <Heading>Hi! My name is Mason! Thanks for checking out my site. </Heading>
        <Heading css={{
          animation: `${wave} 2s linear infinite`
        }}>👋</Heading>
      </HStack>
      <Text>I'm a product-focused software engineer focused on building user-centric solutions.</Text>
      <Text>I love building impactful products and I'm currently interested in LLMs and their applications. Learn more about me by visiting <Link href="about">About Me</Link> or by my <Link href='blog'>blog</Link>.</Text>
      <Text>If you want to see some of my work, check out my <Link href="/projects">projects</Link> or <Link href="https://github.com/mlpierce22" isExternal>Github</Link>.</Text>
      <Text>Please feel free to reach out via <Link href="mailto:mlpierce22@gmail.com">email</Link> or connect with me on <Link href="https://linkedin.com/in/malapier" isExternal>LinkedIn</Link>. Would love to hear from you!</Text>
    </VStack>
  );
}

export default HomePage;