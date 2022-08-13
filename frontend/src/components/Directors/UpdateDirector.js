import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDirector = () => {
    const [director_name, setDirectorName] = useState("");
    const redirect = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getDirectorById = async () => {
            const { data: res } = await axios.get(
                `http://localhost:8000/director/${id}`
            );
            setDirectorName(res.data.directorName);
        };
        getDirectorById();
    }, []);

    const PutDirector = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/director/${id}`,
                { director_name },
                { withCredentials: true }
            );
            redirect("/listdirector");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form onSubmit={PutDirector} bg="dark" className='p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="string"
                    value={director_name}
                    onChange={(e) => setDirectorName(e.target.value)}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button
                    variant="secondary"
                    type="submit"
                    className="me-2"
                    href="/listdirector"
                >
                    Cancel
                </Button>
                <Button variant="warning" type="submit">
                    <b>Submit</b>
                </Button>
            </div>
        </Form>
    )
}

export default UpdateDirector;