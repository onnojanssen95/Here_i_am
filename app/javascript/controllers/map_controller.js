import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }


  connect() {
    mapboxgl.accessToken = this.apiKeyValue
    this.map = new mapboxgl.Map({
      container: this.element,
      preserveDrawingBuffer: true,
      style: "mapbox://styles/mapbox/streets-v11"
    });
    this.mapBoxMarkers = []
    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }
  #addMarkersToMap() {
    // this.mapBoxMarkers = []
    this.markersValue.forEach((marker) => {
      const customMarker = document.createElement("div")
      customMarker.className = "marker"
      customMarker.style.backgroundImage = `url('https://res.cloudinary.com/dzeqloola/image/upload/v1654765307/HereIAm/imagefiles_location_map_pin_light_green10_mfoiec.png')`
      customMarker.style.backgroundSize = "initial"
      customMarker.style.backgroundRepeat = 'no-repeat'
      customMarker.style.backgroundSize = 'contain'
      customMarker.style.width = "27px"
      customMarker.style.height = "41px"
      this.mapBoxMarkers.push(new mapboxgl.Marker(customMarker, {draggable: true})
      .setLngLat([marker.lng, marker.lat])
      .addTo(this.map))
    })
    this.mapBoxMarkers.forEach(marker => marker.on('dragend', () => {
      let coordsArr = this.mapBoxMarkers.map(item => [item.getLngLat().lng, item.getLngLat().lat])
      this.#redrawPath(coordsArr)
    }))

  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
    this.#drawMarkerLines();
  }

  #drawMarkerLines(){
    // let coordsArr =this.mapBoxMarkers.map(item => [item.lng, item.lat])
    // console.log(this.mapBoxMarkers)
    let coordsArr = this.mapBoxMarkers.map(item => [item.getLngLat().lng, item.getLngLat().lat])
    // console.log(coordsArr)
    this.map.on('load', () => {
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': coordsArr
            }
          }
      });
      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      });
      this.map.on('click', (e) => {
        // console.log(`A click event has occurred at ${e.lngLat.lng}`);
        const customMarker = document.createElement("div")
        customMarker.className = "marker"

        customMarker.style.backgroundImage = `url('https://res.cloudinary.com/dzeqloola/image/upload/v1654764562/HereIAm/red_folded_marker_l1y9oh.png')`
        customMarker.style.backgroundSize = "initial"
        customMarker.style.backgroundRepeat = 'no-repeat'
        customMarker.style.backgroundSize = 'contain'
        customMarker.style.width = "27px"
        customMarker.style.height = "41px"
        const newMarker = new mapboxgl.Marker(customMarker, {draggable: true})
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(this.map)
        // console.log(this.mapBoxMarkers.length)
        if(this.mapBoxMarkers.length > 1){
          // console.log(this.mapBoxMarkers[this.mapBoxMarkers.length - 1]._element)
          // this.mapBoxMarkers[this.mapBoxMarkers.length - 1]._element.style.backgroundImage = `url('/assets/greyfoldedpin.png')`
          this.mapBoxMarkers[this.mapBoxMarkers.length - 1]._element.style.backgroundImage = `url('https://res.cloudinary.com/dzeqloola/image/upload/v1654764557/HereIAm/greyfoldedpin_dtpnlt.png')`
          this.mapBoxMarkers[this.mapBoxMarkers.length - 1]._element.style.backgroundSize = `contain`
        }
        this.mapBoxMarkers.push(newMarker)
        let coordsArr = this.mapBoxMarkers.map(item => [item.getLngLat().lng, item.getLngLat().lat])
        this.#redrawPath(coordsArr)

        newMarker.on('dragend', () => {
          let coordsArr = this.mapBoxMarkers.map(item => [item.getLngLat().lng, item.getLngLat().lat])
          this.#redrawPath(coordsArr)
        })
        // this.#drawMarkerLines()
      });
    })
  }
  #redrawPath(coords){
    // console.log('test')
    // console.log(coords)
    this.map.getSource('route').setData(
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": coords
        }
      }
    );
    this.map.addLayer({
      'id': `${Date.now()}`,
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#888',
        'line-width': 8
      }
    });
  }
}
