import { Component } from '@angular/core';
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent
{
    years: Array<string>;

    constructor(private http: Http) {
        this.years = new Array<string>();
    }

    ngOnInit() {
        this.http.get('http://localhost:65248/api/Years').map((res: Response) => res.json())
            .subscribe((items: Array<string>) => {
                this.years = items;
            });
    }
}
