import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  urlImg: string;
  phone: string;
  gender: string;
  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.firstName = data.result.first_name;
      this.lastName = data.result.last_name;
      this.email = data.result.email;
      this.phone = data.result.phone;
      this.gender = data.result.gender;
      this.urlImg = data.result._links.avatar.href;
    });
  }

}
