import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
 
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(withKnobs);
