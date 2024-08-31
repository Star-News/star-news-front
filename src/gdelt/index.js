import axios from "axios";

const gdelt = axios.create({
    baseURL: "https://api.gdeltproject.org/api/v2/doc"
})

export default gdelt