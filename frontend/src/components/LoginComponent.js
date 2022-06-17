import React from 'react'
import { Button, Card, CardGroup, Image} from 'react-bootstrap'
import LoginImages from "../assets/images/bg/login.jpg"
import '../style/LoginComponent.css'

function LoginComponent() {
  return (
    <CardGroup >
        <div >
            <Image src={LoginImages} className="images_login" />
        </div>
        <Card className='card-form'>
            <div>
                <h4 className='fw-bold mb-5'>MOVIEW.</h4>
            </div>
            <div className=''>
                <h5 className="login-title pb-2">Log in</h5>
                <form action="#!" className='form-container text-black-50'>
                    <div>
                        <label for="email" className='d-block pb-1'>Email</label>
                        <input type="email" name="email" id="email" placeholder="email@example.com" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <div>
                        <label for="password" className='d-block pb-1'>Password</label>
                        <input type="password" name="password" id="password" placeholder="enter your passsword" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <Button variant="warning" size="lg" className='w-100 text-white mb-2'>
                        LOGIN
                    </Button>{' '}
                </form>
                <Button variant="link" className='p-0 text-black'>Forgot Password?</Button>
                <p className='mt-5'>
                    Don't have an account?
                    <Button variant="link" className='pt-0 ps-1 text-black text-decoration-none'>Register Here</Button>
                </p>
                </div>
        </Card>
    </CardGroup>
    )
}

export default LoginComponent