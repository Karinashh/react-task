import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches'
});
export default function getLaunches() {

    return axiosInstance.get()
}
