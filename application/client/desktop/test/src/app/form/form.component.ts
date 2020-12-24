import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service.ts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {
    public email = {
        email: '',
        Enter_Name: '',
    }

    constructor (
        private formService: FormService,
    ) { }

    ngOnInit() {
    }
}