import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  imgUrl = 'http://lorempixel.com/output/people-q-c-640-480-8.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
