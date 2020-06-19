const { default: NavBar } = require("./navbar")
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Bitzwatch</title>
                {/* Static Folder is must to import static asserts like css, images etc */}
                <link rel="stylesheet" href="/static/css/compiled/bootstrap.min.css" />
            </Head>
            <NavBar />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;