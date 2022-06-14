import React from 'react'
import { Button, Card, CardGroup, Image} from 'react-bootstrap'
import LoginImages from "../assets/images/bg/login.jpg"
import '../style/RegisterComponent.css'

function RegisterComponent() {
  return (
    <CardGroup >
        <div >
            <Image src={LoginImages} className="images_register" />
        </div>
        <Card className='card-form'>
            <div>
                <h4 className='fw-bold mb-5'>MOVIEW.</h4>
            </div>
            <div className=''>
                <h5 className="login-title pb-2">Register</h5>
                <form action="#!" className='form-container text-black-50'>
                    <div>
                        <label for="name" className='d-block pb-1'>Name</label>
                        <input type="text" name="name" id="name" placeholder="enter your name" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <div>
                        <label for="email" className='d-block pb-1'>Email</label>
                        <input type="email" name="email" id="email" placeholder="email@example.com" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <div>
                        <label for="password" className='d-block pb-1'>Password</label>
                        <input type="password" name="password" id="password" placeholder="enter your passsword" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <div>
                        <label for="password2" className='d-block pb-1'>Confirm Password</label>
                        <input type="password" name="password2" id="password2" placeholder="enter your passsword" className='border-0 border-bottom w-100 mb-3'/>
                    </div>
                    <Button variant="warning" size="lg" className='w-100 text-white mb-2'>
                        Create Your Account
                    </Button>
                </form>
                <p className='mt-3'>
                    Already have an account? 
                    <Button variant="link" className='pt-0 ps-1 text-black text-decoration-none'>Sign-In</Button>
                </p>
                </div>
        </Card>
    </CardGroup>
    )
}

export default RegisterComponent