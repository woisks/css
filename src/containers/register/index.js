import React from 'react';
import {withFormik} from 'formik';
import {Button, Col, Form, Input, Row} from "antd";
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import logo from '../../logo.png'

const registerForm = props => {
    const {values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting} = props;

    const handleClick = () => {
        console.info('获取验证码')
    };

    const logoClick = () => {
        props.history.push('/');
    };

    return (
        <div className='container'>

            <div className='align-center'>
                <img className='form-logo' src={logo} onClick={logoClick} alt="Woisk"/>
            </div>
            <div className="form">
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item
                        help={errors.username && touched.username ? errors.username : ''}
                        validateStatus={errors.username && touched.username ? 'error' : 'success'}
                    >
                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            name="username"
                            id="username"
                            size='large'
                            placeholder='电子邮箱或中国手机号码'
                        />
                    </Form.Item>

                    <Form.Item
                        help={errors.code && touched.code ? errors.code : ''}
                        validateStatus={errors.code && touched.code ? 'error' : 'success'}
                    >
                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.code}
                            name="code"
                            id="code"
                            size='large'
                            placeholder='6位数字验证码'
                            addonAfter={<span onClick={handleClick} className='pointer'> 获取验证码</span>}
                        />

                    </Form.Item>

                    <Form.Item
                        help={errors.password && touched.password ? errors.password : ''}
                        validateStatus={errors.password && touched.password ? 'error' : 'success'}
                    >
                        <Input.Password
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            name="password"
                            id="password"
                            size='large'
                            type='password'
                            placeholder='6-18位密码不区分大小写'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' block disabled={isSubmitting}>注 册</Button>
                    </Form.Item>
                    <Form.Item>
                        <div className="sk navbar" style={{height: '40px', lineHeight: '40px'}}>
                            <span className="left">
                                       <Link to='/login'>已有账号登录</Link>
                            </span>
                            <span className="right">
                                     <Link to='/'>返回首页</Link>
                            </span>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

const Register = withFormik({
    mapPropsToValues: () => ({
        username: '',
        code: '',
        password: ''
    }),

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .trim()
            .ensure()
            .required('不可为空')
            .min(5, '最少5个字符')
            .max(45, '最多45个字符'),
        code: Yup.string()
            .trim()
            .ensure()
            .required('不可为空')
            .length(6, '6位数字验证码'),
        password: Yup.string()
            .trim()
            .ensure()
            .required('不可为空')
            .min(6, '最少6位字符')
            .max(18, '最多18位字符'),

    }),

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 1000);

    },
})(registerForm);

export default Register;