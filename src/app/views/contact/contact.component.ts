import { Email } from './../../model/email.model';
import { EmailService } from './../../services/email/email.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  flag = false;
  flagEmail = false;
  flagNumber = false;
  flagName = false;
  flagMessage = false;
  subscription: Subscription;
  contact: Email;
  name = '';
  email = '';
  phoneNumber = '';
  subject = '';
  message = '';

  constructor(
    private router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  nonEmpty(): void {
    if ((this.name || this.email || this.phoneNumber || this.message) === '') {
      this.flag = true;
    }
  }

  validateEmail(): void {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(String(this.email).toLowerCase());
    if (emailValid === false || this.email === 'paogunwobi@gmail.com' || this.email === 'info@paogunwobi.com') {
      this.flagEmail = true;
    }
  }

  validateNumber(): void {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phonenoValid = phoneno.test(String(this.phoneNumber).toLowerCase());
    if (phonenoValid === false || this.phoneNumber === '08138384155') {
      this.flagNumber = true;
    }
  }

  validateMessage(): void {
    // console.log(`${this.message} ${this.message.length}`);
    if (this.message.length < 3) {
      this.flagMessage = true;
    }
  }

  validateName(): void {
    // console.log(`${this.name} ${this.name.length}`);
    if (this.name.length < 3) {
      this.flagName = true;
    }
  }

  sendMail(): void {
    this.nonEmpty();
    this.validateEmail();
    this.validateNumber();
    this.validateName();

    this.contact = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      subject: this.subject,
      message: this.message
    };
    if (this.flag || this.flagEmail || this.flagMessage || this.flagName || this.flagNumber) {
      return;
    } else {
      this.subscriptionMethod();
    }
  }

  subscriptionMethod(): void {
    this.subscription = this.emailService.sendEmail(this.contact)
      .subscribe(
        data => {
          const msg = data.message;
          alert(msg);
          this.name = '';
          this.email = '';
          this.phoneNumber  = '';
          this.subject = '';
          this.message = '';
          this.contact = {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            subject: this.subject,
            message: this.message
          };
        }, error => {
        console.error(error, 'error');
      });
  }

}
