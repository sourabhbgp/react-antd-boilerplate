import React from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import _ from "lodash";

const { Title } = Typography;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000008c;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  border-radius: 2px;
  padding: 24px;
`;

const Auth = props => {
  const { history, postLogin } = props;

  const onFinish = values => {
    postLogin(_.pick(values, ["email", "password"]))
      .then(resp => history.push("/dashboard"))
      .catch(err => message.error("Authentication Failed"));
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Container>
        <Title level={3}>Dashboard</Title>

        <Form
          style={{ minWidth: 300 }}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!"
              }
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ marginBottom: 8 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Auth;
