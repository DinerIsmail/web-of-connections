import { NextSeo } from 'next-seo';
import { GraphQLClient } from 'graphql-request';
import ReactMarkdown from 'react-markdown';
import { Box, Heading, useBreakpointValue, Flex } from '@chakra-ui/react';

import Layout from '@components/layout';

const About = ({ page }) => {
	return (
		<>
			<NextSeo
				title="About | Cambridge Resilience Web"
				description="Two webs of resilience, showing the environmental and social justice groups in Cambridge"
				openGraph={{
					title: 'About | Cambridge Resilience Web',
					description:
						'Two webs of resilience, showing the environmental and social justice groups in Cambridge',
					// images: [{ url: 'https://cckitchen.uk/cck-preview.png' }],
					url: 'https://cambridgeresilienceweb.org.uk/about',
				}}
			/>
			<Layout applyPostStyling>
				<Flex justifyContent="center">
					<Box
						maxWidth={useBreakpointValue({
							base: '90%',
							md: '650px',
						})}
						mb={8}
					>
						<Heading as="h1" mb={8}>
							{page.title}
						</Heading>
						<ReactMarkdown>{page.content.markdown}</ReactMarkdown>
					</Box>
				</Flex>
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

	const { page } = await graphcms.request(`
	{
		page(where: {slug: "about"}) {
			content {
				markdown
			}
			title
		}
	}
	`);

	return {
		props: {
			page,
		},
		revalidate: 60,
	};
}

export default About;
