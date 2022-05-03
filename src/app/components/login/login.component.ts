import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error!: string;
  errorMessage!: string;
  loading!: string;

  loginForm!: FormGroup;
  hide = true;
  checked = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  updateCheck() {

  }

  ngOnInit(): void {
  }

  onCloseClick() {

  }

  onLoginSubmit() {
    this.router.navigate(['/orders']);
  }
}
