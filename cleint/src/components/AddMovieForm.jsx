import React from 'react';
import {  Drawer, InputNumber, Select,Button, Form, Input ,DatePicker } from 'antd';
import { useAddNewMovieMutation } from '../services/moviesService';

const { Option } = Select;
function AddMovieForm ({open , onClose , setOpen}) {
const [addMovie] = useAddNewMovieMutation();
const [form] = Form.useForm();

const onAddMovieHandler = (values) => {
   
values.releaseDate = new Date(values.releaseDate).getTime();
  addMovie(values).then(() => {
    form.resetFields();
    setOpen(false);
}).catch(error => {
    console.error('Failed to add movie:', error);
    // Optionally, handle errors in a user-friendly manner
});

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  
  return (
    <>
      
      <Drawer title="Add a new movie" size='large' onClose={onClose} open={open}>

      <Form
      form ={form}
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 20,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onAddMovieHandler}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item label="Title" name="title">
      <Input placeholder='Enter the title of the movie' />
    </Form.Item>
    <Form.Item label="Description" name="description">
      <Input.TextArea row={6} placeholder='Enter the description of the movie' required/>
    </Form.Item>
    <Form.Item label="Duration" name="duration">
      <InputNumber/>
    </Form.Item>
    <Form.Item label="Genres" name="genre">
      <Select>
        <Option value="action">Action</Option>
        <Option value="drama">Drama</Option>
        <Option value="comedy">Comedy</Option>
        <Option value="horrer">Horrer</Option>
        <Option value="mystery">Mystery</Option>
        <Option value="thriller">Thriller</Option>
      </Select>
    </Form.Item>
    <Form.Item label="Languages" name="language">
      <Select>
        <Option value="english">English</Option>
        <Option value="hindi">Hindi</Option>
        <Option value="telgu">Telgu</Option>
        <Option value="tamil">Tamil</Option>
        <Option value="kannad">Kannad</Option>
      </Select>
    </Form.Item>
    <Form.Item name="releaseDate" label="Release Date">
          <DatePicker format="DD-MM-YYYY" />
    </Form.Item>
    <Form.Item name="postUrl" label="Poster URL">
          <Input placeholder="Enter Movie Poster" />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 4,
        span: 20,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Drawer>
    </>
  );
};
export default AddMovieForm;