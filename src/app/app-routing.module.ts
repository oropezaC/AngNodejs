import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
  { path: 'usuario',  component: UsuarioComponent },
  { path: 'usuario-create', component: UserCreateComponent},
  { path: 'usuario-detail/:id',component: UsuarioDetailComponent},
  { path: 'user-edit/:id',component: UserEditComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
