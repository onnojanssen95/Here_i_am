import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  connect() {
    console.log("hello")
  }

  toggle(event) {
    const buttonid = event.currentTarget.id
    const menu = document.getElementById(`menu-${buttonid}`)
    menu.classList.toggle("dropdownmenu-visible")
  }
}
