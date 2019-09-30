import { Component } from '@angular/core';
import { Endereco } from './endereco/endereco';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
endereco: Endereco = new Endereco();
  constructor(private http: HttpClient) {}
preencher(){
this.http.get<Endereco>("https://viacep.com.br/ws/" + this.endereco.cep + "/json/").subscribe(
(dados) => this.endereco = dados
)
}
}
