import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent {

    miFomulario: FormGroup = this.fb.group({
        email: ['test1@gmail.com', [Validators.required, Validators.email]],
        password: ['123456', [Validators.required, Validators.minLength(6)]]
    })

    constructor(private fb: FormBuilder, private router: Router) { }

    login() {
        console.log(this.miFomulario.valid)
        this.router.navigateByUrl('/dashboard')
    }


}
