import axios from "axios";

const getAll = async (url) => axios.get(url);

const getById = async (url, id) => axios.get(`${url}/${id}`);

const create = async (url, newObject) => axios.post(url, newObject);

const update = async (url, id, newObject) =>
  axios.put(`${url}/${id}`, newObject);

const remove = async (url, id) => axios.delete(`${url}/${id}`);

export { getAll, getById, create, update, remove };
