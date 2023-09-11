import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { MernComponent } from './mern/mern.component';
import { MeanComponent } from './mean/mean.component';
import { MevnComponent } from './mevn/mevn.component';
import { RestapiComponent } from './restapi/restapi.component';

//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
  //  to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent},
    { path: 'registration', component: RegistrationComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'mern', component:MernComponent},
    { path: 'mean', component:MeanComponent},
    { path: 'mevn', component:MevnComponent},
    { path: 'rest', component:RestapiComponent}
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);