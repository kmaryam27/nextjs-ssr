import Layout from '../components/Layout';

const Index = () => {
return(
    <div>
        <Layout>
            <div className='root'>hello world</div>
            <style jsx>
                {`
                .root{
                    font-weight: bold;
                    color: red 
                }
                
                `}
            </style>

            <style global jsx>
                {`
                body{
                    font-weight: bold;
                    color: red 
                }
                
                `}
            </style>
        </Layout>
    </div>
    )
}
export default Index;