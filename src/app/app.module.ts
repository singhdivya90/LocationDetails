import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';    
import { AppRoutingModule } from './app-routing.module';    
import { AppComponent } from './app.component';    
import { DemoModalsComponent } from './demo-modals/demo-modals.component';    
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";    
import { MatCardModule }  from '@angular/material/card';   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import 'hammerjs';    

@NgModule({    
  declarations: [    
    AppComponent,    
    DemoModalsComponent    
  ],    
  imports: [    
    BrowserModule,    
    AppRoutingModule,BrowserAnimationsModule, MatCardModule, FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],    
  entryComponents: [    
    DemoModalsComponent    
],    
  providers: [],    
  bootstrap: [AppComponent]    
})    
export class AppModule { }
