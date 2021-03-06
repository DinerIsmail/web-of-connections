import {
	Box,
	Container,
	Stack,
	Text,
	Link,
	useColorModeValue,
	Flex,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.800')}
			color={useColorModeValue('gray.600', 'white')}
			zIndex="6"
		>
			<Container
				as={Flex}
				maxW={'7xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Stack direction={'row'} spacing={6}>
					<Link
						href="https://github.com/Cambridge-Resilience-Web/cambridge-resilience-web"
						target="_blank"
					>
						Github
					</Link>
					<Link href="mailto:cambridgeresilienceweb@gmail.com">
						Get in touch
					</Link>
				</Stack>
				<Flex alignItems="center">
					<Text mr={1}>Powered by</Text>
					<Image
						alt="Powered by Vercel"
						src="/vercel.svg"
						width="85"
						height="19"
					/>
				</Flex>
			</Container>
		</Box>
	);
}
