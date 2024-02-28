import { Component } from '@angular/core';
import { EmailService } from '../../email-service';
import { HeaderComponent } from '../../components/header/header.component';
import { CadastroEmailComponent } from '../../components/cadastro-email/cadastro-email.component';
import { ListaComponent } from '../../components/lista/lista.component';
import { allUsers } from '../../mockApi';

@Component({
  selector: 'app-default',
  standalone: true,
  providers: [EmailService],
  imports: [HeaderComponent, CadastroEmailComponent, ListaComponent ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

  emails = allUsers

  addEmail(newEmail: { name: string, email: string}) {
    this.emails.push({ id: this.emails.length + 1, ...newEmail})
  }
}
