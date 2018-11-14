import axios from 'axios';
import returnJSONData from '../utils/returnJSONData';

const MARKETS_URL = 'todo/find/correct/url';


// const axiosInstance = axios.create({
// 	baseURL,
// });


const MarketsAPI = {


    fetchAllMarketsData()
    {

        axios.get('/user?ID=12345') // MARKETS_URL
        .then(returnJSONData)
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
}

export default MarketsAPI;