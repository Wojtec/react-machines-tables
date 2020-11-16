import axios from "axios";

//API CONSUMING

const BASE_URL = "https://poninski-symfony.herokuapp.com";

export const getMachines = () => {
  return axios.get(`${BASE_URL}/api/v1/getAllMachines`).then((res) => {
    return res.data;
  });
};

export const createMachine = (machine) => {
  return axios
    .post(`${BASE_URL}/api/v1/getAllMachines/add`, machine)
    .then((res) => {
      return res.data;
    });
};

export const updateMachine = (machine) => {
  return axios
    .patch(`${BASE_URL}/api/v1/getAllMachines/${machine.id}`, machine)
    .then((res) => {
      return res.data;
    });
};

export const getMachineById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/getAllMachines/${id}`).then((res) => {
    return res.data;
  });
};
