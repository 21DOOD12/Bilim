import axios from "axios";

const instance = axios.create({
  baseURL: "https://bilim-568e2-default-rtdb.firebaseio.com",
});

export default instance;
