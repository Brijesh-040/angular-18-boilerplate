import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    // private utilService : UtilService 
  ){}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // this.router.navigate(['/dashboard']);
      // this.utilService.showSnackbarMessage('Login Successfull!');
    } else {
      console.log('Form is invalid');
    }
  }
}
