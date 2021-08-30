import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111', '1212-1212']
    },
    {
      nome:"Ms Puff",
      email: "driverlicense@gmail.com",
      telefones:['2222-2222']
    },
    {
      nome:"Sr Krabby",
      email: "krabby@gmail.com",
      telefones:['3333-3333']
    },
    {
      nome:"Sponge Bob",
      email: "jellyfish@gmail.com",
      telefones:['4444-4444']
    },
    {
      nome:"Patrick",
      email: "starfish@gmail.com",
      telefones:['5555-5555']
    },
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111']
    },
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111']
    },
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111']
    },
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111']
    },
    {
      nome:"Smith Weber Jagerr Man Jansen",
      email: "thenumberone@gmail.com",
      telefones:['1111-1111']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
