import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout';
import Prices from '../components/prices'
import style from '../static/css/index'


const HomePage = (props) => {
    return (
        <Layout>
            <style>{style.css}</style>
            <h1>Welcome to Bitcoin live price</h1>
            <Prices bpi={props.bpi} />
        </Layout>
    )
}

HomePage.getInitialProps = async function() {
    let res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    res = await res.json()
    console.log(res)
    return {
        bpi: res.bpi
    }
}
  
export default HomePage