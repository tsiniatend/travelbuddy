import { Flex, InputGroup, InputRightElement, Input, Menu, MenuButton, MenuList, MenuItem, Text, } from "@chakra-ui/react";
// import {  } from "@material-ui/lab";
// import { Rating } from "@mui/material";
// import { Rating } from '@mui/material';
// import { InputRightElement } from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React, {useState} from "react"; 
import Link from 'next/link';

import {BiChevronDown, BiRestaurant, BiSearch, BiStar} from 'react-icons/bi';

const Header = ({ setType, setRatings, setCoordinates }) => {

    // set autocomplete for the package that will allow us to fill in places from api
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);

    //set our lat and lng equal to the autocompleted location
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng });
    };
    // search box set to top left
  return <Flex
            position={"absolute"}
            top={0} 
            left={0}
            width={"full"}
            px={4}
            py={2}
            zIndex={101}
  > 

  {/* use auto complete to load our places api  */}
<Flex>
    {/* load our states that allow the autoc display */}
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        {/* chakara ui for our icons */}
        <InputGroup width={"35vw"} shadow="lg">
                <InputRightElement   
                pointerEvents={"none"}
            //    children={<BiSearch color="gray" fontSize={20} />}
                />
 {/* use chakara too create hover effect as well as placeholder */}
                <Input 
                    type={"text"}
                    placeholder="Search Google Map..."
                    variant={"filled"}
                    fontSize={18}
                    bg={"grey"}
                    color={"gray.700"}
                    _hover={{ bg: "whiteAlpha.800"}}
                    _focus={{ bg: "whiteAlpha.800"}}
                    _placeholder={{ color: "gray.700"}}
                />
        </InputGroup>
    </Autocomplete>


    <Flex 
    alignItems={"center"}
    justifyContent={"center"}
    >
        {/* rating flex box */}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          px={10}
          py={4}
          bg={"silver"}
          rounded={"full"}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
          _hover={{ bg: "gray.100"}}
          transition={"ease-in-out"}
          transitionDuration={'0.3s'}

        >
            {/* Call the actual ratings button */}
            <Menu>
                <BiStar fontSize={25}/>
                <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                    Choose Ratings
                </MenuButton>


        {/* Create drop down list using menu item in the list/ on click callback function bring all ratings  */}
                <MenuList>
                    <MenuItem 
                    display={"flex"} 
                    alignItems={"center"} 
                    justifyContent="space-around" 
                    onClick={() => setRatings("")} 
                    >
                    <Text fontSize={20} fontWeight={500} color={"gray.700"}> All Ratings </Text>
                    </MenuItem>

{/* the next time gets clicked to 2nd setRating */}
                    <MenuItem 
                    display={"flex"} 
                    alignItems={"center"} 
                    justifyContent="space-around" 
                    onClick={() => setRatings(2)} 
                    >
                    <Text fontSize={20} fontWeight={500} color={"orange.500"}> 2.0 </Text>
                        
                   {/* <Rating size="small" value={2} readOnly/> */}
                    </MenuItem>


                    <MenuItem 
                    display={"flex"} 
                    alignItems={"center"} 
                    justifyContent="space-around" 
                    onClick={() => setRatings(3)} 
                    >
                    <Text fontSize={20} fontWeight={500} color={"orange.500"}> 3.0 </Text>
                        
                   {/* <Rating size="small" value={2} readOnly/> */}
                    </MenuItem>
                    

                    <MenuItem 
                    display={"flex"} 
                    alignItems={"center"} 
                    justifyContent="space-around" 
                    onClick={() => setRatings(4)} 
                    >
                    <Text fontSize={20} fontWeight={500} color={"orange.500"}> 4.0 </Text>
                        
                   {/* <Rating size="small" value={2} readOnly/> */}
                    </MenuItem>

                    <MenuItem 
                    display={"flex"} 
                    alignItems={"center"} 
                    justifyContent="space-around" 
                    onClick={() => setRatings(5)} 
                    >
                    <Text fontSize={20} fontWeight={500} color={"orange.500"}> 4.5 </Text>
                        
                   {/* <Rating size="small" value={2} readOnly/> */}
                    </MenuItem>

                </MenuList>
            </Menu>
            {/* last drop down icon at end */}
           <BiChevronDown fontSize={25} />
            </Flex>
            
            {/* create our restuarants filter button */}
            <Flex
             alignItems={"center"}
             justifyContent={"center"}
             px={4}
             py={2}
             bg={"silver"}
             rounded={"full"}
             ml={4}
             shadow="lg"
             cursor={"pointer"}
             _hover={{ bg: "gray.100"}}
             transition={"ease-in-out"}
             transitionDuration={"0.3s"}
             onClick={()=> setType("restaurants")}
            >
                {/* call our icon and text */}
                <BiRestaurant fontSize={25} />
                <Text ml={3} fontSize={16} fontWeight={500} >
                    Restuarants
                </Text>
                </Flex>



                <Flex
             alignItems={"center"}
             justifyContent={"center"}
             px={4}
             py={2}
             bg={"silver"}
             rounded={"full"}
             ml={4}
             shadow="lg"
             cursor={"pointer"}
             _hover={{ bg: "gray.100"}}
             transition={"ease-in-out"}
             transitionDuration={"0.3s"}
             onClick={()=> setType("restaurants")}
            >
              
                <Text ml={3} fontSize={16} fontWeight={500} >
                <Link href="/Friends">Friends</Link>
                </Text>
                </Flex>


        </Flex>
    </Flex>
  </Flex> ;  
 
};

export default Header;


// const Header = ({ setType, setRatings, setCoordinates }) => {
//     return  <Flex 
//           position={"absolute"}
//           top={0} 
//           left={0}
//           width={"full"}
//           px={4}
//           py={2}
//           zIndex={101}
//           >
//         <Flex>
//             {/* <Autocomplete> */}
//                 <InputGroup width={'35vw'} shadow='lg'>
//                     <InputRightElement 
//                     pointerEvents={'none'}
//                     children={<BiSearch color="gray" fontsize={20}/>}
//                     />
//                 </InputGroup>
//             {/* </Autocomplete> */}
//         </Flex>
//     </Flex>
//     );
//   };