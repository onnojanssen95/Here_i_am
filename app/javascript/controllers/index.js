// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddressAutocompleteController from "./address_autocomplete_controller.js"
application.register("address-autocomplete", AddressAutocompleteController)

import DropdownController from "./dropdown_controller.js"
application.register("dropdown", DropdownController)

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import MapController from "./map_controller.js"
application.register("map", MapController)

import ClipboardController from "./clipboard_controller.js"
application.register("clipboard", ClipboardController)
