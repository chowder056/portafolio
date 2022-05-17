import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController:AlertController) { 
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


  async iniciar(){
    var f = this.formulariologin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password)
    {console.log('ingresado');
  }else{
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Datos incompletos',
      message: 'Debe llenar todos los parametros.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  }  

}
