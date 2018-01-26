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
    this.http.get('http://localhost:3000/usuarios/'+id).subscribe(data => {
      this.user = data[0];
    });
  }

  updateUser(id, user) {
    console.log(id,user)
   // this.http.put('/book/'+id, data)
   //   .subscribe(res => {
   //       let id = res['_id'];
   //       this.router.navigate(['/book-details', id]);
   //     }, (err) => {
   //       console.log(err);
   //     }
   //   );
 }
}
