import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["form"]

  // connect() {
  //   console.log(this.formTarget)
  // }

  house(event) {
   this.formTarget.value = "house";
   document.querySelector('.container-place-in-the-building').scrollIntoView();
  }
}
