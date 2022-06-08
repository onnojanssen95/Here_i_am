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

  apartment(event) {
    this.formTarget.value = "apartment";
    document.querySelector('.container-place-in-the-building').scrollIntoView();
  }

  office(event) {
    this.formTarget.value = "office";
    document.querySelector('.container-place-in-the-building').scrollIntoView();
  }

  other(event) {
    const form = document.getElementById("text-input");
    form.classList.toggle('text-input');
  }

  next(event) {
    document.querySelector('.container-place-in-the-building').scrollIntoView();
  }
}
