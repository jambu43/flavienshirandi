import React, {ReactElement} from 'react';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from "next/document"

import {ServerStyleSheet} from "styled-components"

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet:any = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    render(): ReactElement{
        return (
            <Html lang="fr">
                <Head>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta title="Cercle Elais Tennis" />
                    <link rel="icon" href="/favicon-elais.ico" />
                    <meta name="theme-color" content="#73141B"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}