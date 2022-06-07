import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["form"]

  connect() {
    console.log(this.formTarget)
  }

  present(event) {
    this.formTarget.checked = true;
    document.querySelector('.more-description').scrollIntoView();
  }

  stairs(event) {
    this.formTarget.checked = false;
    document.querySelector('.more-description').scrollIntoView();
  }
}
