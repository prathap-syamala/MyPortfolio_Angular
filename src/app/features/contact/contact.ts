import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  name = '';
  email = '';
  message = '';

  sendEmail() {

  const templateParams = {

    name: this.name,

    email: this.email,

    message: this.message,

    title: 'Portfolio Contact'

  };

  emailjs.send(
    'service_eo6qekm',
    'template_dqe5x78',
    templateParams,
    'ToaX2A4azFaOKxaCI'
  )
  .then(() => {

    alert('Message Sent Successfully ✅');

    this.name = '';
    this.email = '';
    this.message = '';

  })
  .catch((error) => {

  console.log('FULL ERROR:', error);

  alert(JSON.stringify(error));

});

}

}