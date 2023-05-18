import { Pop } from "../utils/Pop.js";
import { Gifts } from "../models/Gifts.js";
import { setHTML } from "../utils/Writer.js";
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";


function _drawGift(){
let template = ""
// @ts-ignore
AppState.gifts.forEach(g => template += g.giftTemplate)
  setHTML('gifts', template)
}


export class GiftsController {
  constructor() {
    // console.log('gifts controller');
    this.getGifts()
    AppState.on('gifts',_drawGift)
  }
async createGift(){
  try {
    window.event?.preventDefault()
    const form = window.event?.target
    const formData = getFormData(form)
    console.log(formData);
  } catch (error) {
    Pop.error(error)
  }
}

async openGift(id){
  try {
    
    await giftsService.openGift(id)
  } catch (error) {
    Pop [error]
  }
}
  async getGifts(){
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error[error]
    }
  }
}