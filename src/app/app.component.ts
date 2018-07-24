import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  issues: string[];
  owner: string;
  repo: string;

  constructor(private httpClient: HttpClient) {
    this.owner = 'Dueño ej: octocat';
    this.repo = 'Repo ej: Hello-World';
   }
  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  getProfile() {
    this.httpClient.get('https://api.github.com/repos/' + this.owner + '/' + this.repo + '/issues')
    .subscribe(
      (data: any[]) => {
         this.issues = data;
      }
    );
  }
}
