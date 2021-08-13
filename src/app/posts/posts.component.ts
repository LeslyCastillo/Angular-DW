import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  animalitos: any[] = [
    { nombre: "Lobo", descripcion: "Es muy celoso, pero jugueton.", raza: "Pastor Aleman", edad: 5, foto: "lobo.jpg"},
    { nombre: "Killer", descripcion: "Le gusta ladrar y es buen cazador.", raza:"Dogo Argentino", edad: 6, foto: "killer.jpg"},
    { nombre: "Toby", descripcion: "Le gusta jugar mucho y da la mano", raza:"Golden Retriver", edad: 1, foto: "toby.jpg"},
    { nombre: "Solin", descripcion: "Es muy noble y amigable.", edad: 10, raza:"Dogo de Burdeos", foto: "solin.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
