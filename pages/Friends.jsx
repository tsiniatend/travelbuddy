import React from "react";
import Link from 'next/link';
import { Box, Flex, Input, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";

const Friends = () => {
return(
<Flex
direction={"column"}
bg={"grey"}
width={"37vw"}
height="100vh"
position={"absolute"}
left={0}
top={0}
zIndex={1}
overflow="hidden"
px={2}>
    <Input 
                    type={"text"}
                    placeholder="Add Friends..."
                    variant={"filled"}
                    fontSize={18}
                    bg={"white"}
                    color={"gray.700"}
                    _hover={{ bg: "whiteAlpha.800"}}
                    _focus={{ bg: "whiteAlpha.800"}}
                    _placeholder={{ color: "gray.700"}}
                    
                    
                />
                 <Input 
                    type={"text"}
                    placeholder="Look for some Friends..."
                    variant={"filled"}
                    fontSize={18}
                    bg={"white"}
                    color={"gray.700"}
                    _hover={{ bg: "whiteAlpha.800"}}
                    _focus={{ bg: "whiteAlpha.800"}}
                    _placeholder={{ color: "gray.700"}}
                />
                <Box padding="6" boxShadow="lg" bg="white" mt={16}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="3" noOfLines={3} spacing="3" />

  </Box>

    {/* <Text>Hello</Text> */}
</Flex>
)
};

export default Friends 