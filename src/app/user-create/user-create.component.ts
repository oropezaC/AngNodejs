import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserCreateComponent implements OnInit {
  user = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
   this.http.post('http://localhost:3000/usuarios', this.user)
     .subscribe(res => {
         let id = 4;
         this.router.navigate(['/usuario-detail', id]);
       }, (err) => {
         console.log(err);
       }
     );
 }

}