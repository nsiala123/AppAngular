import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  myimage:string="assets/images/profil.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
