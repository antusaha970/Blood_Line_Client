import axios from "axios";

const client = axios.create({
  baseURL: "https://blood-line-server.onrender.com",
});

export default client;
