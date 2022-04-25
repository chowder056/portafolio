import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb:FormBuilder) { 
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confipass': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'patente': new FormControl("",Validators.required)

    })


  }

  ngOnInit() {
  }

}
