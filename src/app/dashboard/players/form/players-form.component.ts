import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Http, Response, Headers} from "@angular/http";

import { Player } from '../player';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss']
})

export class PlayersFormComponent {

    id: number;
    private sub: any;
    currentPlayer: Player;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private route: ActivatedRoute, private _location: Location, private http: Http) { }
    ngOnInit() {
        this.currentPlayer = new Player();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id) {
                this.http.get('http://localhost:65248/api/Players/' + this.id).map((res: Response) => res.json())
                    .subscribe((item: Player) => {
                        this.currentPlayer = item;
                    });
            }
        });
    }

    save() {
        if ((!this.id || this.id == 0) && this.currentPlayer.NickName && this.currentPlayer.NickName.length > 0) {
            this.http.post('http://localhost:65248/api/Players', this.currentPlayer, { headers: this.headers })
                .toPromise()
                .then(res => res);
        }
        else if (this.currentPlayer.NickName && this.currentPlayer.NickName.length > 0) {
            this.http.put('http://localhost:65248/api/Players/' + this.id, this.currentPlayer, { headers: this.headers })
                .toPromise()
                .then(res => res);
        }
    }

    delete() {
        this.http.delete('http://localhost:65248/api/Players/' + this.id)
            .toPromise()
            .then(res => res);
    }

    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    upload(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            let fileName = this.newGuid() + '.' + file.name.split('.').pop();
            this.currentPlayer.Picture = fileName;
            formData.append('uploadFile', file, fileName);
            let headers = new Headers();
            headers.append('Accept', 'application/json');
            this.http.post('http://localhost:65248/api/UploadFile', formData, { headers: headers })
                .map(res => res.json())
                .subscribe(
                data => console.log('success'),
                error => console.log(error)
                )
        }
    }

    back() {
        this._location.back();
    }
}
