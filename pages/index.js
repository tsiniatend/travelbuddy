import { Flex } from "@chakra-ui/react";
import { useState, useEffect} from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetails from "../components/PlaceDetails";
import { getPlacesData } from "./api";
import Head from "next/head";

// const places = [
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
//   { name : "Sample Place1" },
  
// ];

const Home = () => {
  //set state to update one data for place is loaded
  const [places, setPlaces] = useState([]);
  //used to filter thro our ratings
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  //passed to map to give location
  const [coordinates, setCoordinates] = useState({});
  //use bounds info ne, sw to get specfic lat&lng
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  //to check if this is loading we would open it in list
  const [isLoading, setIsLoading] = useState(false);

  //get users current loc and intial login with a useEffect once it is loaded
  useEffect(() => {
    //call our coords object, then call a function . Set then by long and lat
    navigator.geolocation.getCurrentPosition(
      ({coords : { latitude, longitude } }) => {
      console.log({ latitude, longitude });
      setCoordinates({ lat: latitude, lng: longitude});
    });
  }, []);

  // useEffect(() => {
  //   const filteredData = places.filter((place) => place.rating > ratings);
  //   setFilteredPlaces(filteredData);
  // }, [ratings]);

// if there are any changes in ratings then we rerender,  take each place and if the rating is greater than selected then we filter it out 
  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);

  //  asych method taht returns our promise so we use .then and get the data. If any changes in cords bounds or type rerender 
  useEffect(() => {
    setIsLoading(true);
    //if bounds sw or ne  has a value from null , then we pass it and set its place
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return ( 
    //main container
  <Flex
    justifyContent={"center"}
    alignItems={"center"}
    width={"100vw"}
    height={"100vh"}
    maxWidth={"100vw"}
    maxHeight={"100vh"}
    position={"relative"}
  > 
{/* script that will allow our autocomplete places api */}
  <Head>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAgVAhUHjtgT6oBg14SGUX_7yMRMhuL1Pw"></script>
  </Head>

    <Header
    setType={setType}
    setRatings={setRatings} 
    setCoordinates={setCoordinates}
    />

{/* if filtered data is there, then we send whole record */}
    <List 
    places={filteredPlaces.length ? filteredPlaces : places}
    isLoading={isLoading}
    />

{/* if filtered data is there, then we send whole record */}
    <Map 
    setCoordinates={setCoordinates}
    coordinates={coordinates}
    setBounds={setBounds}
    places={filteredPlaces.length ? filteredPlaces : places}
    />

  </Flex>
  );

};

export default Home;