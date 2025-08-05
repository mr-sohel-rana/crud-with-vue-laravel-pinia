
import axios from "axios";

const API = "/api";

export default {
  async fetchAll() {
    const { data } = await axios.get(`${API}/home`);
    return data.data;
  },

  async fetchOne(id) {
    const { data } = await axios.get(`${API}/student/${id}`);
    return data.data;
  },

  async create(payload) {
    const { data } = await axios.post(`${API}/add`, payload);
    return data.data;
  },

  async update(id, payload) {
    const { data } = await axios.put(`${API}/update/${id}`, payload);
    return data.data;
  },

  async remove(id) {
    return await axios.delete(`${API}/delete/${id}`);
  }
};
