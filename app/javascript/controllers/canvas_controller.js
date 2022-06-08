// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="canvas"
// export default class extends Controller {
//   static targets = ["canvas", "input"]
//   connect() {
//     console.log("hallo")
//   }

//   submit(e){
//     e.preventDefault()
//     console.log("blabla")
//     console.log(this.canvasTarget)
//     let dataURL = this.canvasTarget.querySelector('canvas').toDataURL("image/png")//.replace("image/png", "image/octet-stream");
//     // const dT = new DataTransfer();
//     // dT.items.add(dataURL);
//     this.inputTarget.files = dataURL;
//     // this.canvasTarget.toBlob((blob) => {
//     //   let file = new File([blob], "fileName.jpg", { type: "image/jpeg" })
//     //   const dT = new DataTransfer();
//     //   dT.items.add(file);
//     //   this.inputTarget.files = dT.files;
//     // }, 'image/jpeg');
//   }

// }
