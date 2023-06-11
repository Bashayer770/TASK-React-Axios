import axios from "axios";
const URL = "https://pets-react-query-backen.herokuapp.com";

export default async function list() {
  return await axios.get(`${URL}/pets`);
}

export async function addPet(x) {
  return await axios.post(`${URL}/pets/`, x);
}
export async function getById(id) {
  return await axios.get(`${URL}/pets/${id}`);
}

export async function adopt(id) {
  return await axios.put(`${URL}/pets/${id}`, { adopted: true });
}
