import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayFileComponent} from "./display-file/display-file.component";

const routes: Routes = [
  {path: 'display-file', component: DisplayFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
