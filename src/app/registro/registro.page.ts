import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb:FormBuilder,
   public alertController:AlertController ) { 
    
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
 
  async guardar(){
    var f = this.formulariologin.value;
    if(this.formulariologin.invalid){
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Datos incompletos',
        message: 'Debe llenar todos los parametros.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password,
      correo: f.correo,
      patente: f.patente
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

}
