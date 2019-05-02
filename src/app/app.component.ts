import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-elements-with-storybook';

  cards = [
    {
      title: 'Example Title',
      subtitle: 'Subtitle',
      date: new Date(),
      rating: 3,
    },
    {
      title: 'Example Title',
      subtitle: 'Subtitle',
      date: new Date(),
      rating: 3,
    },
    {
      title: 'Example Title',
      subtitle: 'Subtitle',
      date: new Date(),
      rating: 3,
    },
    {
      title: 'Example Title',
      subtitle: 'Subtitle',
      date: new Date(),
      rating: 3,
    },
    {
      title: 'Example Title',
      subtitle: 'Subtitle',
      date: new Date(),
      rating: 3,
    },
  ];

  onMessage(title: string) {
    alert(`Title: ${title}`);
  }
}
