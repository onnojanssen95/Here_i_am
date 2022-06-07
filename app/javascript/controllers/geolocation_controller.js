import { Controller } from "@hotwired/stimulus"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"


// Connects to data-controller="geolocation"
export default class extends Controller {
  static targets=["link", "address"]
  static values = {
    coordinates: Object,
    apiKey: String
  }

  connect() {
    this.lat = 0
    this.long = 0
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(this.linkTarget)
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      this.lat = position.coords.latitude
      this.long = position.coords.longitude

      // this.coordinatesValue = {lat, long}
      // console.log(this.coordinatesValue)
      this.linkTarget.href = `${this.linkTarget.href}?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
    })
    this.geocoder = new MapboxGeocoder({
      accessToken: this.apiKeyValue,
      location: [this.lat, this.long],
      types: "country,region,place,postcode,locality,neighborhood,address",
      reverseGeocode: true
    })
    this.geocoder.addTo(this.element)
    this.geocoder.on("result", event => this.#setInputValue(event))
    this.geocoder.on("clear", () => this.#clearInputValue())
  }

  #setInputValue(event) {
    this.addressTarget.value = event.result["place_name"]
  }

  #clearInputValue() {
    this.addressTarget.value = ""
  }
  track(e) {
    e.preventDefault()
    document.querySelector(".mapboxgl-ctrl-geocoder--input").value = `${this.long}, ${this.lat}`
    
    // this.addressTarget.value = `${this.long}, ${this.lat}`

    // this.geocoder.query(`${this.long}, ${this.lat}`)
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.longitude)
      console.log(position.coords.latitude)

      this.geocoder.query(`${position.coords.latitude}, ${position.coords.longitude}`)
      })

    // this.geocoder = new MapboxGeocoder({
    //   accessToken: this.apiKeyValue,
    //   location: [lat, long],
    //   types: "country,region,place,postcode,locality,neighborhood,address",
    //   reverseGeocode: true
    // })
    // this.geocoder.addTo(this.element)
    // console.log(this.geocoder)
    // this.geocoder.on("result", event => this.#setInputValue(event))
    // this.geocoder.on("clear", () => this.#clearInputValue())
    // // console.log(this.addressTarget.value)



  }

}
