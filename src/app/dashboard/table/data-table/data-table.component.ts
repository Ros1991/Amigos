import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DataService } from '../../../shared/data/index';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
	// data table settings
    public settings: any = {
        columns: {
            name: {
                title: 'Name'
            },
            email: {
                title: 'Email'
            },
            regDate: {
                title: 'Reg Date'
            },
            age: {
                title: 'Age'
            }
        }
    };
    errorMessage: string;
    source: LocalDataSource; // add a property to the component

    constructor(public dataService: DataService) {
        this.source = new LocalDataSource();
    }

    // call the getnames function to fetch data from json 
    ngOnInit() {
        this.getNames();
    }

    // used to fetch all the data from json file
    getNames() {
        this.dataService.get()
        .subscribe(
            names => {
                this.source.load(names);
            },
            error =>  this.errorMessage = <any>error
        );
    }
}
