import Header from './Header'
import Head from 'next/head'
import Router from 'next/router'
import Nprogress from 'nprogress'

Router.onRouteChangeStart = (url) => {
    console.log(url)
    Nprogress.start();
}

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

const Layout = props => {
    return(
    <div>
        <Head>
            <title>change title of app</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
        </Head>
        <Header/>
        {props.children}
        <div>Footer</div>
    </div>
    );
}
export default Layout;