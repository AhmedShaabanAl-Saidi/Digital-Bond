import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  isLoading: boolean = false;


  constructor(
    private _ToastrService: ToastrService
  ) { }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?:\+20|0)?1[0125]\d{8}$/),
    ]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
  });

  submitContactForm() {
    if (this.contactForm.valid) {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this._ToastrService.success('Message sent successfully! We will get back to you.', 'Success');

        // Reset form
        this.contactForm.reset();
        this.contactForm.markAsUntouched();
        this.contactForm.markAsPristine();

      }, 1000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
