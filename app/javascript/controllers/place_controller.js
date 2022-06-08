import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["form"]

  connect() {
    console.log(this.formTarget)
  }

  front(event) {
    this.formTarget.value = "front house";
    document.querySelector('.container-floor').scrollIntoView();
  }

  wing(event) {
    this.formTarget.value = "wing";
    document.querySelector('.container-floor').scrollIntoView();
  }

  back(event) {
    this.formTarget.value = "back house";
    document.querySelector('.container-floor').scrollIntoView();
  }

  other(event) {
    const form = document.getElementById("text-input2");
    form.classList.toggle('text-input');

    // const appear = document.querySelector('.text-input');
    // appear.style.display == "block";
  }

  next(event) {
    document.querySelector('.container-floor').scrollIntoView();
  }
}
