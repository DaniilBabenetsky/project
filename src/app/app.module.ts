import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CollegeComponent } from './college/college.component';
import { SpecializedComponent } from './specialized/specialized.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './test/question/question.component';
import { PhAMaComponent } from './ph-a-ma/ph-a-ma.component';
import { MedComponent } from './med/med.component';
import { InfTecComponent } from './inf-tec/inf-tec.component';
import { SocEcComponent } from './soc-ec/soc-ec.component';
import { MediaComponent } from './media/media.component';
import { HumComponent } from './hum/hum.component';
import { GenComponent } from './gen/gen.component';
import { ConnectionComponent } from './connection/connection.component';
import { AnswerComponent } from './test/answer/answer.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    CollegeComponent,
    SpecializedComponent,
    TestComponent,
    PhAMaComponent,
    MedComponent,
    InfTecComponent,
    SocEcComponent,
    MediaComponent,
    HumComponent,
    GenComponent,
    TestComponent,
    QuestionComponent,
    ConnectionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
