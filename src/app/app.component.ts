import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agrotente-front';
  datos: any[] = [];

  constructor(private http: HttpClient) {}

  // Método para hacer la petición GET
  obtenerDatos() {
    this.http.get<any[]>('http://localhost:8080/api/farms/by-user?user=1').subscribe(
      (response) => {
        this.datos = response;
        console.log('Datos obtenidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
