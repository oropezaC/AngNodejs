import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent implements OnInit {
  user = {};
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataId(this.route.snapshot.params['id']);
  }

  getDataId(id) {
    this.http.get('/usuarios/'+id).subscribe(data => {
      this.user = data[0];
    });
  }

  updateUser(user) {
    this.http.put('/usuarios', user)
    .subscribe(res => {
      let id = res['id'];
      this.router.navigate(['/usuario']);
    }, (err) => {
    }
  );
}
}
