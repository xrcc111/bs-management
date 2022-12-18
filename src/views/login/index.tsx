import React from 'react'
import { Button, Form, Input } from 'antd'
import { AppDispatch, RooState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { userLoginIn } from '@/store/reducer/user'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { User } from '@/api/login'
import styles from './login.module.scss'

const Login: React.FC = () => {
  const { token } = useSelector((state: RooState) => state.user)
  console.log(token);
  if(token) {
    localStorage.setItem('token',token)
  }
  const dispatch: AppDispatch = useDispatch()
  const onFinish = (values: User) => {
    dispatch(userLoginIn(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className={styles.loginPage}>
      <div className={styles.title}>通用管理系统</div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
        >
          <Input placeholder='请输入用户名' prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
        >
          <Input.Password placeholder='请输入密码' prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login