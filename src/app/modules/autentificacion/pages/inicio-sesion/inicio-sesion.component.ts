import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;


  constructor(
public servicioAuth: AuthService,
public servicioFirestore: FirestoreService,
public servicioRutas: Router
){}


  // Definimos la interfaz de usuario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función para iniciar sesión
  async iniciarSesion(){
   

const credenciales = {
  email:this.usuarios.email,
  password: this.usuarios.password
}
const res = await this.servicioAuth.IniciarSesion (credenciales.email, credenciales.password)
.then(res => {
  alert('¡Se pudo ingresar con exito!');

  this.servicioRutas.navigate([ '/inicio']);
})
.catch(err => {
alert('Hubo un problema al iniciar sesion')
}
)


    this.limpiarInputs();
  }
  // ############################# FIN INGRESADO

  limpiarInputs(){
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
