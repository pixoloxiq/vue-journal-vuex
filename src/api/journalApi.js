import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-6d0ad-default-rtdb.firebaseio.com",
});

export default journalApi;
