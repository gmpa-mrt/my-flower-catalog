import {openDB} from "idb";

export const createDb = async () =>  await openDB(import.meta.env.VITE_DATABASE_NAME, 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("user")) {
            db.createObjectStore("user", {keyPath: "id", autoIncrement: true});
        }
    }
})
