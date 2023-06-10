import axios from "axios";
const URL = "https://pets-react-query-backen.herokuapp.com";

export default function list() {
  return axios.get(`${URL}/pets`);
}

export function Addpet(x) {
  return axios.post(`${URL}/pets/`, x);
}
export function getById(id) {
  return axios.get(`${URL}/pets/${id}`);
}

export function adopt(id) {
  return axios.put(`${URL}/pets/${id}`, { adopted: true });
}
