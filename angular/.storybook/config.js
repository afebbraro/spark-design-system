import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-theming/storybook-spark-theme";
import '../src/polyfills';
import '!style-loader!css-loader!sass-loader!../../storybook-theming/font-loader.scss';
import '../../storybook-theming/icon-loader';
import { setCompodocJson, extractProps } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);
addDecorator(withA11y);
addParameters({
  options: {
    theme: sparkTheme,
    showRoots: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

addParameters({
  docs: {
    extractComponentDescription: (component, { info }) => {
      if (info) {
        return typeof info === 'string' ? info : info.markdown || info.text;
      }
      return null;
    },
    extractProps,
  },
});

configure(require.context('../projects/spark-angular/src/lib', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
