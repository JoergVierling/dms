import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment/environment'; // Importieren Sie die Umgebungsvariable

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  currentTime: string = '';
  isApiAvailable: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTime();
  }

  fetchTime(): void {
    this.http.get<any>('http://localhost:81/time').subscribe(
      (response: any) => {
        this.currentTime = response.time;
        this.isApiAvailable = true;
        setTimeout(() => {
          this.fetchTime();
        }, 1000);
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Zeit:', error);
        this.isApiAvailable = false;
        setTimeout(() => {
          this.fetchTime();
        }, 1000);
      }
    );
  }
}