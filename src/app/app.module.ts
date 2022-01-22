import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CollegeComponent } from './college/college.component';
import { SpecializedComponent } from './specialized/specialized.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './test/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    CollegeComponent,
    SpecializedComponent,
    TestComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
