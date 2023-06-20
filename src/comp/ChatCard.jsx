/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      //   align={"center"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading
      as={"h3"}
      fontSize={"sm"}
      color={useColorModeValue("gray.600", "gray.400")}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return <Text fontSize={"md"}>{children}</Text>;
};

const ChatCard = (props) => {
  return (
    <>
      <Box>
        <Container py={16} as={Stack}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>{props.text}</TestimonialText>
              <TestimonialHeading>{props.creater}</TestimonialHeading>
            </TestimonialContent>
          </Testimonial>
        </Container>
      </Box>
    </>
  );
};

export default ChatCard;
