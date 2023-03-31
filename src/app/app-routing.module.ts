import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfigComponent } from './components/config/config.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
    { path: 'config', component: ConfigComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }