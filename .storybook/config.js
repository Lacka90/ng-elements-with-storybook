import { configure } from '@storybook/angular';

function loadStories() {
  const req = require.context('../projects', true, /\.story\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
