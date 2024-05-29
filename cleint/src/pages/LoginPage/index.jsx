import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router';
import { loginuser } from '../../api/users';
import { useEffect } from 'react';



function LoginPage({setLoginUser}) {
  const  navigate = useNavigate();

  const onFinish = async(values) => {
     try {
       const res = await loginuser(values);
       if(res.success){
        message.success(res.message);
        localStorage.setItem("scaler-token", res.token);
        navigate('/');
       }
       else{
         message.error(res.message);
       }
     } catch (error) {
      message.error(error.message);
     }
  };
  useEffect(()=>{
    if(localStorage.getItem('scaler-token')){

    }
  })
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="form-wrapper">
      <div className="form-cover">
      <h3>Login here</h3>
      <Form
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='password'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={(e)=> {
          e.preventDefault();
          navigate("/register")}} type="link" htmlType="submit">
          New User? Register here
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

export default LoginPage;