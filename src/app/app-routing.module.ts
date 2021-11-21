import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SpecializedComponent } from './specialized/specialized.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'college',
    component: CollegeComponent,
  },
  {
    path:'',
    component:IntroductionComponent,
  },
  {
    path: 'specialized',
    component:SpecializedComponent,
  },
  {
    path: 'test',
    component:TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
