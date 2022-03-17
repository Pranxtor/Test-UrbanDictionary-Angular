import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '/generator', component: GeneratorComponent }
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
