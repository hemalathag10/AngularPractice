import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path:'timer', component: TimerComponent },
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  {path:'parent', component:ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
