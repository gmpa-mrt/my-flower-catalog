import {fetchJson} from "../api/init.js";


export async function getPlants() {
    console.log("Called")
    const data = await fetch('https://trefle.io/api/v1/plants?token=ojYcImEFrxbaZ90lASjrk-N3lYTw6Rpv-kK87pIvgIo')
        .then(r => r.json())
    console.log('Plants ===> ', data)

    return data.data
}