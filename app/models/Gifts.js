import { AppState } from "../AppState.js";

export class Gifts{
  constructor(data){
    this.id = data.id
    this.tag = data.tag
    this.image = data.base
    this.opened = data.opened
    this.url = data.url
    this.creatorId = data.creatorId
  }

  get giftTemplate(){
    if(this.opened == false) {
    return /*html*/`
       <div class="col-6 my-3 d-flex">
              <div class="card elevation-1">
                <img
                  class="rounded-top"
                  src="https://www.shutterstock.com/image-photo/red-gift-box-golden-ribbon-260nw-157822775.jpg"
                  alt=""
                />
                <div class="card-body">
                  <p class="fs-4 mb-2 d-flex justify-content-between">
                    <span>${this.tag} </span>
                    <span> </span>
                  </p>
                  <div
                    class="d-flex align-items-center justify-content-between border-top pt-2"
                  >
                    <button
                      onclick="app.GiftsController.openGift('${this.id}')"
                      class="btn btn-primary"
                    >
                      Open Gift
                    </button>
                    <div>
                      <span class="text-capitalize"></span>
                      <img class="rounded seller-picture" src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `
    } else if(this.opened == true) {
         return /*html*/`
       <div class="col-6 my-3 d-flex">
              <div class="card elevation-1">
                <img
                  class="rounded-top"
                  src="${this.url}"
                  alt=""
                />
                <div class="card-body">
                  <p class="fs-4 mb-2 d-flex justify-content-between">
                    <span>${this.tag} </span>
                    <span> </span>
                  </p>
                  <div
                    class="d-flex align-items-center justify-content-between border-top pt-2"
                  >
                   
                    <div>
                      <span class="text-capitalize"></span>
                      <img class="rounded seller-picture" src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `
    }
  }
}