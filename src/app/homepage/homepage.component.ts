import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {  FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor(private location: Location
    ) { }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
 });
  
  
  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(!this.profileForm.valid)
      return false
    console.log(this.profileForm);

    this.location.go('/generator')
    return true
    //console.log(this.password);
  }
}
