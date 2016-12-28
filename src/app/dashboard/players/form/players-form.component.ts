import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss']
})

export class PlayersFormComponent {

    id: number;
    private sub: any;
    date: any;
    name: any;
    nickName: any;
    email: any;
    phone: any;
    position: any;
    subscriber: any;

    constructor(private route: ActivatedRoute, private _location: Location) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id) {
                this.date = '21/01/1991'
                this.name= 'Rodrigo Silva';
                this.nickName= 'Porco';
                this.email = 'rozz1991@gmail.com';
                this.phone = '(61) 99207-4540';
                this.position = 'm';
                this.subscriber = true;
            }
        });
    }

    save() {
        alert(this.date);
        alert(this.name);
        alert(this.nickName);
        alert(this.email);
        alert(this.phone);
        alert(this.position);
        alert(this.subscriber);
    }

    back() {
        this._location.back();
    }
}
