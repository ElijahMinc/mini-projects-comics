import axios from "axios";

import { API_KEY } from './../constants/api';

class GetDataApi {
   async getData(url) {
      try {
         const response = await axios.get(url, {
            params: {
               apikey: API_KEY,
               limit: 100
            }
         }) // у аксиос есть метод get(), куда можно отправить урлу и получить промис
         return response.data.data.results;
      } catch (error) {
         console.log(error.message);
         return false
      }
   }
}

const getDataApi = new GetDataApi();

export default getDataApi;