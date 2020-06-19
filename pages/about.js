import Layout from '../components/layout'
import style from '../static/css/about';

const AboutPage = () => {
    return (
        <Layout>
            <div>
                <style>{style.css}</style>
                <h1 className="header">
                    About Bitcoin live price
                </h1>
                <p></p>
            </div>
        </Layout>
    )
}
  
export default AboutPage