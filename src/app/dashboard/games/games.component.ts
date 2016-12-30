import { Component } from '@angular/core';
import './owlCarousel/owl.carousel.min.js';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss', './owlCarousel/docs.theme.min.css','./owlCarousel/owl.carousel.min.css', './owlCarousel/owl.theme.default.css']
})

export class GamesComponent {
    constructor() {
    }

    ngOnInit() {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            })
        });
    }
}
