import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private router: Router
    ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(8)]
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log(event);
    // this
    // .authService.initSession(this.form.value)
    // .subscribe(data => {console.log('Data: ' + JSON.stringify(data))});
    this.router.navigate(['/portfolio']);
  }
}
