import { Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'

const ProfileTabEdit = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
                rootClassName='bbl3-form'
                >
                <Row gutter={[20, 0]}>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                          label="Profile Description"
                          name="serviceDescription"
                          rules={[{ required: true, message: 'Required field' }]}
                        >
                          <TextArea rows={4} style={{ width: '100%', height: '100px' }} />
                        </Form.Item>
                      </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ProfileTabEdit