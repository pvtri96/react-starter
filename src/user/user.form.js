import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useRef } from "react";

export const UserForm = (props) => {
  const formRef = useRef();
  const onFinish = (values) => {
    props.onSubmit?.({
      ...values,
      id: props.updatingUser?.id ?? Math.random(),
    });
    formRef.current.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (props.updatingUser) {
      formRef.current.setFieldsValue(props.updatingUser);
    } else {
      formRef.current.resetFields();
    }
  }, [props.updatingUser]);

  return (
    <Form
      ref={formRef}
      name="basic"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ paddingRight: 12 }}
    >
      <Typography.Title style={{ textAlign: "center" }}>
        User Form
      </Typography.Title>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="First Name"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          { required: true, message: "Please input your current country!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please input your current city!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          { required: true, message: "Please input your current address!" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Work at" name="workAt" rules={[]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
