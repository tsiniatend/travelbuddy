
import axios from "axios";

//our url link to api
const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";



  //wait until data is succesfully fetched the ne and sw coordinates. Try catch for errors, set our method
  //call our bounds locators from useeffect
export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
            data : {data},
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
               
              },
              headers: {
                'X-RapidAPI-Key': '9e715b39e4msh3c41d1e621edc67p1624dejsnccc92842c40f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              },

        }); 
        // return all the information fetched
            return data;
    } catch (error) {
        console.log(`Fetch data Error : ${error}`);
    }
};