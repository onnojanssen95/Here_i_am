import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["form"]

  connect() {
    console.log(this.formTarget)
  }

  front(event) {
    this.formTarget.value = "front house";
    document.getElementById('id').scrollIntoView();
  }

  wing(event) {
    this.formTarget.value = "wing";
  }

  back(event) {
    this.formTarget.value = "back house";
  }


  other(event) {
    this.formTarget.value = "other";
  }
}
