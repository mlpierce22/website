import { Button, HStack, Heading, List, ListItem, Text } from '@chakra-ui/react';

export type HighlightList = {
    desc: string,
    icon?: any,
    textSize?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
}

type HighlightListProps = {
    highlightList: HighlightList[]
    title: string
}

const HighlightList = ({ highlightList, title }: HighlightListProps) => {
    return (
        <>
            <Heading size="lg" mb={2}>{title}</Heading>
            <List spacing={2}>
                {highlightList.map((highlight, index) => (
                    <ListItem key={`${index}-highlight-item`}>
                        <HStack spacing={4}>
                            <Text>{highlight.icon}</Text>
                            <Text>{highlight.desc}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default HighlightList;