import { Box, Image, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";

const Map = ({ coordinates, setCoordinates, setBounds, places}) => {
    //if the card has detials or not
    const [isCard, setIsCard] = useState(false);
    //contains card data
    const [cardData, setCardData] = useState(null);
  return (  
  <Box width={"full"} height={"full"}>

      {/* how to call our map api from google react */}
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAgVAhUHjtgT6oBg14SGUX_7yMRMhuL1Pw"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        //set our bounds and coord values
        onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng });

            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //set the card data and fetch it by passing child as array
        onChildClick={(child) => {
            setCardData(places[child]);
            setIsCard(true);
        }} 
        >
            {/* if there are places than we point the location  */}
            {places?.map((place, i) => (
                <Box
                key={`${place.latitude}-${i}`}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                position={"realative"}
                cursor="pointer"

                >
                    {/* use IoLocation as the red point for each area */}
                            <IoLocation color="red" fontsize={30} />
                </Box>
            ) )}
{/* if the card is true then we render the small display of the location */}
            {isCard && (
                <Box
                width={"400px"}
                height={"300px"}
                bg={"whiteAlpha.900"}
                position={"absolute"}
                top={-12}
                left={0}
                shadow={"lg"}
                rounded={"lg"}

                >
                   {/* reuse image but call it from card data */}
                     <Image
          objectFit={"cover"}
          width={"full"}
          height={"full"}
          rounded="lg"
          src={
            cardData?.photo
              ? cardData?.photo?.images?.large?.url
              : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
          }
        />

{/* call the name of the location */}
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {cardData.name}

            </Text>

{/* our delete tab box */}
            <Box
            cursor={"pointer"}
            position={"absolute"}
            top={2}
            right={2}
            width={"30px"}
            height={"30px"}
            bg={"red.300"}
            rounded={"full"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => {
                setIsCard(false);
            }}
            >
                    <BiX fontSize={20} />
            </Box>

                </Box>
            )}
        </GoogleMapReact>
    </Box>
  );
};

export default Map;