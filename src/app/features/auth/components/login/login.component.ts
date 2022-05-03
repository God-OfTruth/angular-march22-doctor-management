import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title:string = 'Login'
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  }, [Validators.required, Validators.minLength(3)])
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onLoginClick(){
    const form = this.loginForm.value;
    this.authService
    .createUser(form.username, form.password)
    .subscribe((val: any) => {
      console.log(val);      
      this.router.navigateByUrl('/doctor');
    });
  }

}
