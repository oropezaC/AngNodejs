import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioDetailComponent implements OnInit {
  user = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getDataId(this.route.snapshot.params['id']);
  }

  getDataId(id) {
      this.http.get('http://localhost:3000/usuarios/'+id).subscribe(data => {
        this.user = data[0];
      });
    }

  deleteUser(id) {
  this.http.delete('http://localhost:3000/usuarios/'+id)
    .subscribe(res => {
        this.router.navigate(['/usuario']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
