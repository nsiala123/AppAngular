import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

handleLogout(){
  this.authService.logout().subscribe({
    next:(data)=>{
      this.router.navigateByUrl("/login")

    }
  })
}

}
