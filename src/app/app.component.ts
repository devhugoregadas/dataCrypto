import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;
  
  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.firstValueFrom()
      .subscribe(res => {
        this.cryptos = res;
        //console.log(res);
      });
  }
  
}
