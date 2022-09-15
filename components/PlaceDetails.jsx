import { Badge, Flex, Image, Text } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import React from "react";

import { IoLocation } from "react-icons/io5";

const PlaceDetail = ({ place }) => {
  return (
      //main container
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"start"}
      justifyContent="space-between"
    >
        {/* create more flex boxes to position it, create the divsion/ main info holder */}
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width="full"
          px={1}
        >

            {/* we load our text inisde and set it center chakara/ Our location name and price */}
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
          >

            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {place.name}
            </Text>

            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {place.price}
            </Text>
          </Flex>

          {/* Ratings container
          */}
          <Flex alignItems={"center"} width={"full"}>
              {/* add the rating from tripadvisor number passed by its place rating */}
            <Rating size="small" value={Number(place.rating)} readOnly />

            {/* display total number of review inside a bracket using string literal and calling num reviews */}
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            >{`(${place.num_reviews})`}</Text>

            {/* finally call our price level using same styles */}
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
              ml={"auto"}
            >
              {place.price_level}
            </Text>
          </Flex>

          {/* Calling our Ranking */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.400"}>
            {place.ranking}
          </Text>

          {/* Calling our Open status */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.600"}>
            {place.open_now_text}
          </Text>

          {/* calling our dietary_restrictions if this place has dietray restrictions we render this component*/}
          {place?.dietary_restrictions && (
            <Flex width={"full"} flexWrap={"wrap"}>
                {/* map through all restirctions and itll take the data and index and display it in a chakara Badge */}
              {place.dietary_restrictions.map((n, i) => (
                <Badge
                  colorScheme={"pink"}
                  cursor={"pointer"}
                  key={i}
                  m={1}
                  fontSize={10}
                >
                  {n.name}
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>

        
        {/* we set our location image by calling it. If the photo is avaialbe display the image large url, in case it doest load we add our placeholder  */}
        <Image
          objectFit={"cover"}
          width={"120px"}
          height={"120px"}
          rounded="lg"
          alt="dummyPhoto"
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
          }
        />
      </Flex>
{/* render our address, if place has address then we display it using a flex box  */}
      {place?.address && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>
          <IoLocation fontSize={20} color="gray" />
          <Text
            isTruncated
            fontSize={"small"}
            fontWeight={500}
            color={"gray.700"}
            ml={1}
          >
            {place.address}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default PlaceDetail;

