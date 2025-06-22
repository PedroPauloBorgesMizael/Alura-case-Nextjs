import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TFW9C59XGL"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-TFW9C59XGL');
                    `
                }}
                />
            </Head>

            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
