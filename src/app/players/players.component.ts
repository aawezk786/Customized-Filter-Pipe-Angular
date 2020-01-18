import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;
  searchName:string="";

  constructor(private http:HttpClient) { }

  ngOnInit() {
   let response= this.http.get("http://demo2505404.mockable.io/zewaa");
   response.subscribe((data)=>this.players=data);
  }

}
