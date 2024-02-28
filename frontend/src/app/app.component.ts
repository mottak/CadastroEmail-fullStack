import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { EmailService } from './email-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cadastro de emails';
}
