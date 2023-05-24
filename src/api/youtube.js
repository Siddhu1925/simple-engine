import axios from "axios";

const KEY = "AIzaSyALNPDFNcDmF-IH_jQWdWBEuy6CZNPFlDs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});