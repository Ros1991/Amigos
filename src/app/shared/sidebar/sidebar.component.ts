import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
declare var $:any;

import 'rxjs/add/operator/map';

@Component({
	selector: 'sidebar-cmp',
	templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
	isActive = false;
    showMenu: string = '';
    years: Array<string>;

    constructor(private http: Http) {
        this.years = new Array<string>();
    }

	ngOnInit() {
		var calendar:any = $('#calendar1');
		calendar.fullCalendar({
			 eventClick: function(calEvent:any, jsEvent:any, view:any) {
			    alert('Event: ' + calEvent.title);
			    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			    alert('View: ' + view.name);
			}
        });

        this.http.get('http://localhost:65248/api/Years').map((res: Response) => res.json())
            .subscribe((items: Array<string>) => {
                this.years = items;
            });
        
		var sidebar: any = $('.sidenav-outer');
		sidebar.perfectScrollbar();
	}

	eventCalled() {
		this.isActive = !this.isActive;
	}

	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
