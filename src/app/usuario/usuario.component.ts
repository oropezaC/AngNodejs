import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) { }
  users: any;
  ngOnInit() {
    this.http.get('http://localhost:3000/usuarios').subscribe(data => {
    this.users = data;
    console.log("HEy",this.users)
  });
  }

}
