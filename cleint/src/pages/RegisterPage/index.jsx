import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import axiosInstance from '../../api';



function registerpage() {
  const naviagte = useNavigate();

  const onFinish = (values) => {
    axiosInstance.post("/api/users/register" , values)
    .then(res => {
      alert(res.data.message);
      naviagte("/login");
    }
    
    );
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-wrapper">
      <div className="form-cover">
      <h3>Register here</h3>
      <Form
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        
        name="name"
        rules={[
          {
            required: true,
            message: 'Please enter your username!',
          },
        ]}
      >
        <Input  placeholder='username'/>
      </Form.Item>

      <Form.Item
        
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password'/>
      </Form.Item>
      
      <Form.Item
        
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email!',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>
      
      <Form.Item
      name="isAdmin"
      valuePropName="checked"
      
    >
      <Checkbox>is Admin?</Checkbox>
    </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        
        <Button onClick={(e)=>{
          e.preventDefault();
          naviagte('/login')}} type="link" htmlType="submit">
          Go to login page
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

export default registerpage