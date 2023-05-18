import { AppState } from "../AppState.js";

export class Gifts{
  constructor(data){
    this.id = data.id
    this.tag = data.tag
    this.image = data.base
    this.opened = data.opened  || 'false'
  }
}