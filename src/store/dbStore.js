import {defineStore} from "pinia";
import {ref} from "vue";

export const dbStore = defineStore('dbStore', () => {
    const isConnected = ref(false)


    return {isConnected}
})