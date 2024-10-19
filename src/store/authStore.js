import {defineStore} from "pinia";
import {ref} from "vue";

export const authStore = defineStore('user',() => {
    const isLogged = ref(false)
    const name = ref('')

    return {isLogged, name}
})