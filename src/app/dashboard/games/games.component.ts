import { Component } from '@angular/core';
import './owlCarousel/owl.carousel.min.js';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss', './owlCarousel/owl.carousel.css', './owlCarousel/owl.theme.default.css']
})

export class GamesComponent {
    constructor() {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel();
        });
    }


        
    
}
