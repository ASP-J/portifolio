import { defineStore } from "pinia";

export const useLayout = defineStore("layout", {
    state: () => {
        return {
            theme: process.client ? localStorage.getItem("nuxt-color-mode") || "lightTheme" : "lightTheme",
        };
    },
    getters: {
        getTheme() {
            return this.theme;
        },
    },
    actions: {
        setTheme(theme) {
            this.theme = theme;
            if (process.client) {
                localStorage.setItem("nuxt-color-mode", theme);
            }
        },
    },
});