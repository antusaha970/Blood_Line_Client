import axios from "axios";

const client = axios.create({
  baseURL: "https://blood-line-feni.onrender.com",
});

export default client;
