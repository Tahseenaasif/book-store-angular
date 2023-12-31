import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';
// const routes:Routes=[
  
//    {
//      path:'about-us',component:AboutUsComponent,
     
//    },
//     {
//       path:'how-its-work', component:HowItWorksComponent,
//     }
  
// ]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent
  ],
  exports:[
   // RouterModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    PublicModule
   // RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
