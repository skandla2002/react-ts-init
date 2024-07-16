import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3000",
});

export const fetchData = async () => {
  try {
    const response = await api.get("/data");
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
