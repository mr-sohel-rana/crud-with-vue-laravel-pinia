 // CrudStore.js
import axios from "axios";
import { defineStore } from "pinia";

export const useCrudStore = defineStore('crud', {
  state: () => ({
    posts: [],
    student: ''
  }),

  actions: {
    async fetchData() {
      try {
        const response = await axios.get('/api/home');
        this.posts = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async signleData(id) {
      try {
        const response = await axios.get(`/api/student/${id}`);
        this.student = response.data.data;
      } catch (error) {
        console.error("Error fetching single data:", error);
      }
    },

    async addItem(data) {
      try {
        const response = await axios.post('/api/add', data);
        this.posts.push(response.data.data);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    },

    async deleteItem(id) {
      try {
        await axios.delete(`/api/delete/${id}`);
        this.posts = this.posts.filter(post => post.id !== id);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },

    async updateItem(id, data) {
      try {
        const response = await axios.put(`/api/update/${id}`, data);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  }
});
