import {Layout} from "antd";
const { Header, Footer, Sider, Content } = Layout;

function HomePage() {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default HomePage