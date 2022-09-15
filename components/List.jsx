import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import PlaceDetails from "./PlaceDetails";
// import places from "../pages/index";

// we call our useStates to set if its loaded
const List = ({places, isLoading}) => {
 if (isLoading) 
 return (

    // create the side container for our locations
     <Flex
     direction={"column"}
     bg={"whiteAlpha.900"}
     width={"37vw"}
     height="100vh"
     position={"absolute"}
     left={0}
     top={0}
     zIndex={1}
     overflow="hidden"
     px={2}
     >
  
{/* use skeleton circle and text to create a simple UI box's for our rendered locaitons */}
  <Box padding="6" boxShadow="lg" bg="white" mt={16}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="4" noOfLines={4} spacing="4" />

  </Box>
  <Box padding="6" boxShadow="lg" bg="white" mt={3}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="4" noOfLines={4} spacing="4" />

  </Box>
  <Box padding="6" boxShadow="lg" bg="white" mt={3}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="4" noOfLines={4} spacing="4" />

  </Box>
  <Box padding="6" boxShadow="lg" bg="white" mt={3}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="4" noOfLines={4} spacing="4" />

  </Box>
  <Box padding="6" boxShadow="lg" bg="white" mt={3}>
      <SkeletonCircle size="10"/>
      <SkeletonText  mt="4" noOfLines={4} spacing="4" />

  </Box>
  

     </Flex>
 );
  
 return (
    //  return our exact same flex box 
     <Flex
     direction={"column"}
     bg={"whiteAlpha.900"}
     width={"37vw"}
     height="100vh"
     position={"absolute"}
     left={0}
     top={0}
     zIndex={1}
     overflow="hidden"
     px={2}
     >
            <Flex flex={1} overflowY={"scroll"} mt={16} direction={"column"}>
                {/* if there are places, we will map through them all and render our placeDetails componenet to call our info from locations */}
                { places && 
                places.map((place, i) => <PlaceDetails place={place} key={i} />)}
            </Flex>
     </Flex>
 );
};

export default List;