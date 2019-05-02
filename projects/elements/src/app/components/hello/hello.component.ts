import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.scss'],
})
export class HelloComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() date = '';
  @Input() rating = '';
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  sendMessage(value: string) {
    this.onClick.emit(value);
  }
}
