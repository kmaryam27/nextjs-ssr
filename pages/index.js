import Layout from '../components/Layout';
const Index = () => {
return(
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
    </Layout>
    )
}
export default Index;