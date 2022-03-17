import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router
    ) { }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
 });
  
  
  ngOnInit(): void {
    
  }

  onSubmit() {
    if(!this.profileForm.valid)
      return false

    console.log(this.profileForm);
    this.router.navigate(['/generator'])
    return true
  }
}
