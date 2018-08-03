import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  TemplateRef} from '@angular/core';
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

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.css']
})
export class ValidateEmailComponent implements OnInit {

  @Input()
  public user;
  public myform: FormGroup;
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    //this.createFormControls();
    this.createForm();
  }


    /**
     * to open modal dailog
     */
    public openModal(template: TemplateRef < any >): void {
        this.modalRef = this.modalService.show(template);
    }

  public createForm() {
    const validEmailRegEx = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    this.myform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(validEmailRegEx),
        this.emailMatchValidator.bind(this)
      ])
    }, { updateOn: 'blur' });
  }

  public createFormControls() {

  }

  public emailMatchValidator(control: AbstractControl): { [key: string]: boolean } {
    console.log(this.user.santa.email);
    const emailEntered = control.value;
    if (emailEntered && (control.errors && !control.errors.pattern)) {
      const forbidden = emailEntered !== this.user.santa.email;
      return {'matchEmail': forbidden };
    }
    return {'matchEmail': false };
  }

}
