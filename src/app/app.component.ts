import {Component} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'theming-app';
  email = new FormControl('', [Validators.required, Validators.email]);
  myFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group({});
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
