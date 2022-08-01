import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, CardGroup, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import LoginImages from "../assets/images/bg/login.jpg"

function RegisterComponent() {
    const [user_name, setUserName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [confirm_password, setConfirm] = useState("");
    const [message, setMessage] = useState("");
    const redirect = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:8000/user/register",
                {
                    user_name,
                    user_email,
                    user_password,
                    confirm_password
                },
                { withCredentials: true }
            );
            redirect("/login");
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };

    return (
        <CardGroup >
            <div >
                <Image src={LoginImages} style={{ height: '100vh', width: '100vh' }} />
            </div>
            <Card className="justify-content-center p-5">
                <div>
                    <h4 className='fw-bold mb-5'>MOVIEW.</h4>
                </div>
                <div className=''>
                    <h5 className="login-title pb-2">Register</h5>
                    <form action="#!" className='form-container text-black-50' onSubmit={Auth}>
                        <div>
                            <label for="name" className='d-block pb-1'>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={user_name}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="enter your name"
                                className='border-0 border-bottom w-100 mb-3' />
                        </div>
                        <div>
                            <label for="email" className='d-block pb-1'>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@example.com"
                                className='border-0 border-bottom w-100 mb-3' />
                        </div>
                        <div>
                            <label for="password" className='d-block pb-1'>Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={user_password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="enter your passsword"
                                className='border-0 border-bottom w-100 mb-3' />
                        </div>
                        <div>
                            <label for="password2" className='d-block pb-1'>Confirm Password</label>
                            <input
                                type="password"
                                name="password2"
                                id="password2"
                                value={confirm_password}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="enter your passsword"
                                className='border-0 border-bottom w-100 mb-3' />
                        </div>
                        <Button variant="warning" size="lg" className='w-100 text-white mb-2' type='submit'>
                            Create Your Account
                        </Button>
                    </form>
                    <p className='mt-3'>
                        Already have an account?
                        <a variant="link" className='pt-0 ps-1 text-info text-decoration-none' href='/login'>Sign-In</a>
                    </p>
                </div>
            </Card>
        </CardGroup>
    )
}

export default RegisterComponent