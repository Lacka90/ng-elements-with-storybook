import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './components/hello/hello.component';

const components = [HelloComponent];

@NgModule({
  declarations: [...components],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [...components],
})
export class AppModule {
  constructor(private injector: Injector) {
    const elements: any[] = [[HelloComponent, 'app-hello']];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() {}
}
