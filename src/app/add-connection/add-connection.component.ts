import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { connectionModel } from './add-dash board.model';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {
formValue!: FormGroup;
ConnectionModelobj:connectionModel=new connectionModel();

  constructor(private formbuilder:FormBuilder ,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
this.formValue=this.formbuilder.group({
  nom:[''],
  categorie:[''],
  lien:[''],
  commentaire:[''],
  localisation:[''],
  date:[''],

})

  }


handleBouton(){
  this.router.navigateByUrl("/add-connection");
}


postConnectionDetails(){
this.ConnectionModelobj.nom=this.formValue.value.nom;
this.ConnectionModelobj.categorie=this.formValue.value.categorie;
this.ConnectionModelobj.lien=this.formValue.value.lien;
this.ConnectionModelobj.commentaire=this.formValue.value.commentaire;
this.ConnectionModelobj.localisation=this.formValue.value.localisation;
this.ConnectionModelobj.date=this.formValue.value.date;

this.api.postEmploye(this.ConnectionModelobj)
.subscribe(res=>{
  console.log(res);
  alert("Connection added successfully")
  this.formValue.reset();
},
err=>{
alert("Please try again");
})

  }




}
