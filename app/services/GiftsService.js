import { AppState } from "../AppState.js";
import { Gifts } from "../models/Gifts.js";
import { setHTML } from "../utils/Writer.js";
import { api } from "./AxiosService.js";


class GiftsService {
  async createGift(formData) {
    const res = await api.post(`api/gifts`, formData) 
    const newGift = new Gifts(res.data)
    AppState.gifts.push(newGift)
    AppState.emit('gifts')
    }
  async openGift(id) {
    const gift = AppState.gifts.find(g => g.id == id)
    // @ts-ignore
    gift.opened = !gift?.opened
    const res = await api.put(`api/gifts/${id}`,gift)
    console.log("did it work" , res.data);
    let gifIndex = AppState.gifts.findIndex(g => g.id == id)
   console.log(gifIndex);
   AppState.gifts.splice(gifIndex,1,new Gifts(res.data))
   AppState.emit(`gifts`)

  }
  async getGifts() {
const res = await api.get('/api/gifts')
AppState.gifts = res.data.map(g => new Gifts(g))
console.log(AppState.gifts);
  }

}

export const giftsService = new GiftsService()