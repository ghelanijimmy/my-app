import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  emoji = ['🎉', '😍', '😜', '👍'];
  title = 'Ultra Racing';
  carPart = {
    'id': 1,
    'name': "Super Tires",
    'description': "These tires are the very best",
    'inStock': 5
  };
  activeEmoji: string;
  changeEmoji(){
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }
}
