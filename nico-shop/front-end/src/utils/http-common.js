import axios from "axios";
import Utils from "./helpers";

export default axios.create({
  baseURL: Utils.API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
