import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] =[
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

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS;
  }

  addContatos(cont:Contato): void{
    BASE_DE_CONTATOS.push(cont);
  }
}
