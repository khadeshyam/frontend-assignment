import React from 'react';
import { Box, Image, Skeleton, Text } from '@chakra-ui/react';

interface Cat {
	id: string;
	url: string;
}

interface CatCardProps {
	cat: Cat | null;
	isLoading: boolean;
}

const CatCard: React.FC<CatCardProps> = ({ cat, isLoading }) => (
	console.log(cat, isLoading),
	<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
		<Skeleton isLoaded={!isLoading}>
			<Image src={cat?.url} alt="cat" boxSize="300px" objectFit="cover" />
		</Skeleton>

		<Box p="6">
			<Skeleton isLoaded={!isLoading}>
				<Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
					Cat ID: {cat?.id}
				</Text>
			</Skeleton>
		</Box>
	</Box>
);

export default CatCard;