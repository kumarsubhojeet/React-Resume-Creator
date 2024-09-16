import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default function Personal_Details() {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [github, setGithub] = useState('')
    const [linkedin, setLinkedin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('Fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('github', github);
        localStorage.setItem('linkedin', linkedin);
        
        

    }
    return (
        <div>
            <Form
                name="basic"
                onSubmit={handleSubmit}
                className=' flex justify-center flex-col items-center w-[60%] mx-auto '
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <div className=' flex items-center justify-between px-3 '>
                    <Form.Item
                        label="First Name"
                        name="fanme"
                        value={fname}
                        onMetaChange={(e) => setFname(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your First Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="username"
                        value={lname}
                        onMetaChange={(e) => setLname(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>

                <div className=' flex items-center justify-between px-3 '>
                    <Form.Item
                        label="Phone Number"
                        name="Phone"
                        value={phone}
                        onMetaChange={(e) => setPhone(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone No!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email Id"
                        name="Email Id"
                        value={email}
                        onMetaChange={(e) => setEmail(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>

                <div className=' flex items-center justify-between px-3 '>
                    <Form.Item
                        label="Github URL"
                        name="Github"
                        value={github}
                        onMetaChange={(e) => setGithub(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Github link!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Linkedin"
                        name="Linkedin"
                        value={linkedin}
                        onMetaChange={(e) => setLinkedin(e.target.change)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input Linkedin!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className=' my-10 ' type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
