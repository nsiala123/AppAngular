
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { connectionModel } from '../add-connection/add-dash board.model';
import { AuthentificationService } from '../authentification.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']

})

export class ListeComponent implements OnInit {
updateEmployee() {
throw new Error('Method not implemented.');
}
  page= 1;
  pageSize= 10;
  employeeData ! :Array<connectionModel>;
  formValue!: FormGroup;
  nom!:any;
  searchText: any;
  connect!:string;
  p:number= 1;


  constructor(private formbuilder:FormBuilder ,private router:Router,public api:ApiService,public authService:AuthentificationService) {  }

  ngOnInit(): void {

    this.formValue=this.formbuilder.group({
      nom:[''],
      categorie:[''],
      lien:[''],
      localisation:[''],
      date:[''],
      commentaire:['']

    })

    this.getAllEmployee();

  }


  handleBouton(){
    this.router.navigateByUrl("/admin/add-connection");
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe((res)=>{
  this.employeeData =res;

    })
  }


deleteEmploye(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("connection deleted");
    this.getAllEmployee();
  })
}


onEdit(row: any){
 const res =
 this.formValue.controls['nom'].setValue(row.nom);
 this.formValue.controls['categorie'].setValue(row.categorie);
 this.formValue.controls['lien'].setValue(row.lien);
 this.formValue.controls['localisation'].setValue(row.localisation);
 this.formValue.controls['date'].setValue(row.date);
 this.formValue.controls['commentaire'].setValue(row.commentaire);
this.connect= (res as unknown as string);
}

connexion(){
  const result=this.formValue.value.lien;
  (window as any).open(result, "_blank");
}





}
