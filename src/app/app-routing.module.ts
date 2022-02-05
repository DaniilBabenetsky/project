import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { GenComponent } from './gen/gen.component';
import { HumComponent } from './hum/hum.component';
import { InfTecComponent } from './inf-tec/inf-tec.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MedComponent } from './med/med.component';
import { MediaComponent } from './media/media.component';
import { PhAMaComponent } from './ph-a-ma/ph-a-ma.component';
import { SocEcComponent } from './soc-ec/soc-ec.component';
import { SpecializedComponent } from './specialized/specialized.component';
import { TestComponent } from './test/test.component';
import { ConnectionComponent } from './connection/connection.component';

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
    component: SpecializedComponent,
    children: [
      {
        path: 'ph-a-ma',
        component:PhAMaComponent,
      },
      {
        path: 'med',
        component:MedComponent,
      },
      {
        path: 'inf-tec',
        component:InfTecComponent,
      },
      {
        path: 'soc-ec',
        component:SocEcComponent,
      },
      {
        path: 'media',
        component:MediaComponent,
      },
      {
        path: 'hum',
        component:HumComponent,
      },
      {
        path: 'gen',
        component:GenComponent,
      },
    ]
  },
  {
    path: 'test',
    component:TestComponent,
  },
  {
    path: 'connection',
    component:ConnectionComponent,
  },

  {
    path: '**',
    redirectTo:'/'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
