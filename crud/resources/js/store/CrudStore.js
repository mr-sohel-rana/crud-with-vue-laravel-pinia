 import axios from "axios";
import { defineStore } from "pinia";

export const useCrudStore = defineStore('crud', {
  state: () => ({
    posts: []
  }),

  actions: {
    fetchItem() {
    
    },

    addItem(data) {

    },

    deleteItem(id) {

    },

    updateItem(id, newData) {

    }
  }
});
