import { storiesOf } from '@storybook/angular';
import { HelloComponent } from './hello.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

storiesOf('Hello component', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    component: HelloComponent,
    props: {
      title: text('title', 'My title'),
      subtitle: text('subtitle', 'subtitle'),
      date: new Date(),
      rating: number('rating', 5),
    },
  }))
  .add('with content', () => ({
    moduleMetadata: {
      declarations: [HelloComponent],
    },
    template: `<app-hello title="ContentTitle">
    This is the content
  </app-hello>`,
  }))
  .add('with image', () => ({
    moduleMetadata: {
      declarations: [HelloComponent],
    },
    template: `<app-hello title="ContentTitle">
    <img src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" />
  </app-hello>`,
  }));
