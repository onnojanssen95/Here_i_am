import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="canvas"
export default class extends Controller {
  static targets = ["canvas", "input"]
  connect() {
    console.log("hallo")
  }

  submit(e){
    console.log("blabla")
    console.log(this.canvasTarget)
    if(this.canvasTarget.querySelector('canvas')){
      e.preventDefault()
      this.canvasTarget.querySelector('canvas').toBlob((blob) => {
        let file = new File([blob], "fileName.png")
        const dT = new DataTransfer();
        dT.items.add(file);
        this.inputTarget.files = dT.files;
      });
      setTimeout(() => {

        e.target.submit()
      }, 1000);
    }
  }

  next(event) {
    document.querySelector('.add-picture').scrollIntoView();
  }


}
