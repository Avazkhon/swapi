import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss';

import initStyle from './style.css';

const CustomDocumentHOC = (store) => {
  class CustomDocument extends React.Component {
    static async getInitialProps({ assets, data, renderPage }) {
      const sheets = new SheetsRegistry();
      const page = await renderPage(App => props =>
        <JssProvider
          registry={sheets}
          id={process.env.RAZZLE_APP_MINIMIZE_CLASSES && {minify: true}}
        >
          <App {...props} />
        </JssProvider>
      );
      const css = sheets.toString();
      return { assets, data, ...page, css };
    }

    render() {
      const {
        helmet,
        assets,
        data,
        css,
      } = this.props;

      const htmlAttrs = helmet.htmlAttributes.toComponent();
      const bodyAttrs = helmet.bodyAttributes.toComponent();

      return (
        <html {...htmlAttrs}>
          <head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="utf-8" />
            <title>Swapi</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            {helmet.link.toComponent()}

            {process.env.NODE_ENV === 'production' ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: `<script src="${assets.client.js}" defer></script>`,
                }}
              />
            ) : (
              <span
                dangerouslySetInnerHTML={
                  { __html: `<script src="${assets.client.js}" defer crossorigin></script>` } // prettier-ignore
                }
              />
            )}
          </head>
          <style dangerouslySetInnerHTML={ { __html: initStyle} } />
          <style id="server-side-styles">
          {css}
          </style>

          <body {...bodyAttrs}>
            <AfterRoot />
            <AfterData data={data} />
          </body>

          <script
            // __PRELOADED_STATE__
            dangerouslySetInnerHTML={
              { __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}` } // prettier-ignore
            }
          />

        </html>
      );
    }
  }
  return CustomDocument;
}

export default CustomDocumentHOC;
