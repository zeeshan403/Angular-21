import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DatePipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn');


  currentTime: Date = new Date();

  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  get secondsRotation(): number {
    return this.currentTime.getSeconds() * 6;
  }

  get minutesRotation(): number {
    return this.currentTime.getMinutes() * 6;
  }

  get hoursRotation(): number {
    return (this.currentTime.getHours() % 12) * 30 +
           this.currentTime.getMinutes() * 0.5;
  }
}
