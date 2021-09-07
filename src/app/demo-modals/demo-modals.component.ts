import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Time } from "@angular/common";




@Component({
  selector: 'app-demo-modals',
  templateUrl: './demo-modals.component.html',
  styleUrls: ['./demo-modals.component.css']
})
export class DemoModalsComponent implements  OnInit{
  ip = '';
  LocalCountry='';
  LocalCity='';
  LocalTimeZone = '';
  LocalTime ='';
  RequestedCountry ='';
  RequestedCity = '';
  RequestedTimeZone = '';
   
  RequestedTime ='';

  HoursDifference = 0;
  
  constructor(
  private formBuilder : FormBuilder,
    private http: HttpClient
  
  ){}
  
  ngOnInit(){
    this.getIPAddress();
    
  }
  getIPAddress()
    {
      this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ip = res.ip;
      
     });
    }
  
  ipAddressForm = this.formBuilder.group({
      ipaddress: ''
      
    });
    
    onSubmit(): void
    {
    
      var ipAddress = this.ip;
      var requestedIP = this.ipAddressForm.value.ipaddress;
      this.http.get("https://localhost:13650/LocationTracker?ipAddress=" + ipAddress).subscribe((res: any) => {
  
        
        this.LocalCountry = res.country_name;
        this.LocalCity = res.city;
        this.LocalTimeZone = res.time_zone.name;
        this.LocalTime = res.time_zone.current_time;
        
      });
      this.http.get("https://localhost:13650/LocationTracker?ipAddress=" + requestedIP).subscribe((res: any) => {
  
        
        this.RequestedCountry = res.country_name;
        this.RequestedCity = res.city;
        this.RequestedTimeZone = res.time_zone.name;
        this.RequestedTime = res.time_zone.current_time;
        
      });
      debugger;
       let localDate = new Date(this.LocalTime);
       let requestedDate = new Date(this.RequestedTime);
       var diff = Math.abs(localDate.getUTCHours() - requestedDate.getUTCHours());
       this.HoursDifference=diff;

 
  
      
     

        
       
        
 
  
      
      
    }

    
  }