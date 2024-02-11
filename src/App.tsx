// App.tsx
import { Box, VStack, Grid, Button } from '@chakra-ui/react';
import CatCard from './components/CatCard';
import useFetchCat from './hooks/useFetchCat';

function App() {
  const { cat, fetchCat, isLoading } = useFetchCat();

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <CatCard cat={cat} isLoading={isLoading} />
          <Button onClick={fetchCat} colorScheme="teal" isLoading={isLoading}>
            Refetch Cat
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default App;