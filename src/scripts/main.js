// import external dependencies
import jQuery from 'jquery';
import {library, dom} from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-free/js/fontawesome.min";
import "@fortawesome/fontawesome-free/js/solid.min";
import "@fortawesome/fontawesome-free/js/brands.min";
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import 'bootstrap';


import OwlCarousel from "./utils/OwlCarousel";
import Offcanvas from "./utils/Offcanvas";

window.$ = window.JQuery = jQuery;
jQuery(document).ready(function () {
    OwlCarousel.init();
    Offcanvas.init();
});

library.add(faEnvelope);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();