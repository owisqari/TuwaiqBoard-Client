import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex
      h={"100%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bg={"#260B3A"}
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page does not seem to exist
        </Text>

        <Button bg={"#260B3A"} as={"a"} href="/" color="white">
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
};
export default NotFound;
