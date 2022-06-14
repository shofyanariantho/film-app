import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function FormComponentUpload() {
  return (
    <Container>
    <h3 className='p-4'> RATE YOUR FILM </h3>
    <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
                Title
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Title Film" />
            </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
                Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control
            as="textarea"
            style={{ height: '100px' }}
          />
            </Col>
            </Form.Group>
        <fieldset>
            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Rating
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="⭐"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="⭐⭐"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        type="radio"
                        label="⭐⭐⭐"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                    <Form.Check
                        type="radio"
                        label="⭐⭐⭐⭐"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                    />
                    <Form.Check
                        type="radio"
                        label="⭐⭐⭐⭐⭐"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios5"
                    />
                </Col>
            </Form.Group>
        </fieldset>
        <Form.Group controlId="formFileSm" className="mb-3" as={Row}>
            <Form.Label>Upload Cover</Form.Label>
            <Form.Control type="file" size="sm" className='ms-2'/>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
            </Col>
        </Form.Group>  

        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
            </Col>
        </Form.Group>
    </Form>
    </Container>
  )
}

export default FormComponentUpload