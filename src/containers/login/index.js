import React from 'react';
import {withFormik} from 'formik';
import {Button, Col, Form, Input, Row} from "antd";
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import logo from '../../logo.png'

const registerForm = props => {
    const {values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting} = props;


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
                            placeholder='UID/邮箱/登录名/手机号'
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
                            placeholder='密码'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' block disabled={isSubmitting}>登 录</Button>
                    </Form.Item>
                    <Form.Item>

                        <div className="sk navbar" style={{height: '40px', lineHeight: '40px'}}>
                            <span className="left">
                                    <Link to='/register'>没有账号去注册</Link>
                            </span>
                            <span className="right">
                                   <Link to='/'>忘记密码</Link>
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

        password: ''
    }),

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(5, '最少5个字符')
            .max(45, '最多45个字符')
            .required('不可为空'),
        password: Yup.string()
            .min(6, '最少6位字符')
            .max(18, '最多18位字符')
            .required('不可为空'),

    }),

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 1000);

    },
})(registerForm);

export default Register;