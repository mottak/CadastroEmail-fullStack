import { Component, Input } from '@angular/core';
import {allUsers} from '../../mockApi'

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})



export class ListaComponent {
  
  constructor(
   
  ) {}
  emails: {id: number, name: string, email: string}[]=[];



  ngOnInit() {
    this.emails = allUsers
  }


  addEmail(newEmail: { name: string, email: string}) {
    this.emails.push({ id: this.emails.length + 1, ...newEmail})
  }



}
