import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageBaseComponent } from './pages/page-base/page-base.component';
import { TestComponent } from './components/test/test.component';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageBaseComponent,
    TestComponent,
    HexagonComponent,
    PageProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
