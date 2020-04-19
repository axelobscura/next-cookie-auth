import Document, { Head, Main, NextScript } from 'next/document';
import { getServerSideToken, getUserScript } from '../lib/auth';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx);
        const userData = await getServerSideToken(ctx);
        return { ...props, ...userData };
    }
    render() {
        const { user = {} } = this.props;
        console.log('angelitios');
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
                    <NextScript />
                </body>
            </html>
        )
    }
}