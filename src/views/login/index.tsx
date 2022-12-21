import React, { useEffect } from 'react'
import { Button, Form, Input, message } from 'antd'
import { AppDispatch, RooState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { userLoginIn, setToken } from '@/store/reducer/user'
import { useNavigate } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { User } from '@/api/login'
import styles from './login.module.scss'

const Login: React.FC = () => {
  const { token } = useSelector((state: RooState) => state.user)
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (token) {
      dispatch(setToken())
      messageApi.open({
        type: 'success',
        content: '登录成功',
      })
      navigate('/home')
    }
  }, [token])
  const dispatch: AppDispatch = useDispatch()
  const onFinish = (values: User) => {
    dispatch(userLoginIn(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className={styles.loginPage}>
      {contextHolder}
      <div className={styles.title}>管理系统</div>
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