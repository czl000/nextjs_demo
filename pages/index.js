import { Button, DatePicker, Space, version } from "antd";

function HomePage() {
    return (
        <div >
            <h1 class="text-3xl font-bold underline">antd version: {version}</h1>
            <Space>
                <DatePicker />
                <Button type="primary">Primary Button</Button>
            </Space>
        </div>
    )
}

export default HomePage