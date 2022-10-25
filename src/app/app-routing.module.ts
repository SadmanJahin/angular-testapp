import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { ErrorNopageComponent } from './error-nopage/error-nopage.component';
import { RouterModule,Routes } from '@angular/router';


const routes : Routes = [

{
   component:LoginComponent,
   path:'login'
},
{
  component:HomeComponent,
  path:''
},
{
  component:TasksComponent,
  path:'tasks'
},
{
  component:ErrorNopageComponent,
  path:'**'
}


] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
