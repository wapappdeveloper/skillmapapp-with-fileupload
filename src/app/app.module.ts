import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillMapComponent } from './components/skill-map/skill-map.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StandardSkillsComponent } from './components/standard-skills/standard-skills.component';
import { MappedSkillsComponent } from './components/mapped-skills/mapped-skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'skill-map', component: SkillMapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HeaderComponent,
    SkillMapComponent,
    SkillsComponent,
    StandardSkillsComponent,
    MappedSkillsComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
