import { defineStore } from "pinia";
import CrudService from "../service/CrudService";

export const useCrudStore = defineStore('crud', {
  state: () => ({
    posts: [],
    student: null,

  }),

  actions: {
    async fetchData() {
      try {
        this.posts = await CrudService.fetchAll();
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },

    async singleData(id) {
      try {
        this.student = await CrudService.fetchOne(id);
      } catch (error) {
        console.error("Single fetch error:", error);
      }
    },

    async addItem(data) {
      try {
        const newItem = await CrudService.create(data);
        this.posts.push(newItem);
      } catch (error) {
        console.error("Add error:", error);
      }
    },

    async deleteItem(id) {
      try {
        await CrudService.remove(id);
        this.posts = this.posts.filter(item => item.id !== id);
      } catch (error) {
        console.error("Delete error:", error);
      }
    },

    async updateItem(id, data) {
      try {
        const updated = await CrudService.update(id, data);
      } catch (error) {
        console.error("Update error:", error);
      }
    }
  }
});
