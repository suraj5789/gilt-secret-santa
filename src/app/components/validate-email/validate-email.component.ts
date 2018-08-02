import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.css']
})
export class ValidateEmailComponent implements OnInit {

  @Input()
  public user;
  public myform: FormGroup;
  //public email: FormControl;

  constructor() { }

  ngOnInit() {
    //this.createFormControls();
    this.createForm();
  }

  public createForm() {
    this.myform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
        this.emailMatchValidator.bind(this)
      ])
    }, { updateOn: 'blur' });
  }

  public createFormControls() {

  }

  public emailMatchValidator(control: AbstractControl): { [key: string]: boolean } {
    console.log(this.user.santa.email);
    const emailEntered = control.value;
    if (emailEntered && emailEntered.indexOf("@") != -1) {
      const forbidden = emailEntered !== this.user.santa.email;
      return forbidden ? { 'matchEmail': forbidden } : null;
    }
    return null;
  }

}
