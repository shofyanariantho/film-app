import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateActor = () => {
    const [actor_name, setActorName] = useState("");
    const redirect = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getActorById = async () => {
            const { data: res } = await axios.get(
                `http://localhost:8000/actor/${id}`
            );
            setActorName(res.actorName);
        };
        getActorById();
    }, []);

    const PutActor = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/actor/${id}`, 
                {actor_name},
                {withCredentials: true }
            );
            redirect("/createactor");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form onSubmit={PutActor} bg="dark">
            <Form.Group className="p-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="string"
                    value={actor_name}
                    onChange={(e) => setActorName(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className='m-3 w-25'>
                Submit
            </Button>
        </Form>
    )
}

export default UpdateActor