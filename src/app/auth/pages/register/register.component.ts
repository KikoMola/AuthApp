import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [
    ]
})
export class RegisterComponent {

    miFomulario: FormGroup = this.fb.group({
        name: ['test1', [Validators.required]],
        email: ['test1@gmail.com', [Validators.required, Validators.email]],
        password: ['123456', [Validators.required, Validators.minLength(6)]]
    })

    constructor(private fb: FormBuilder, private router: Router) { }

    registro() {
        console.log(this.miFomulario.value)

        this.router.navigateByUrl('/dashboard')
    }

}
