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
    this.formTarget.value = "other";
  }
}
