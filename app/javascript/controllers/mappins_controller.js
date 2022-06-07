import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  // static targets = ["form"]

  // connect() {
  //   console.log(this.formTarget)
  // }

  next(event) {
    document.querySelector('.add-picture').scrollIntoView();
  }
}
