import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { MevnComponent } from './mevn/mevn.component';
import { RestapiComponent } from './restapi/restapi.component';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    CoursesComponent,
    RegistrationComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    MeanComponent,
    MernComponent,
    MevnComponent,
    RestapiComponent
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
