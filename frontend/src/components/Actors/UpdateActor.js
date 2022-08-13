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
                { actor_name },
                { withCredentials: true }
            );
            redirect("/listactor");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form onSubmit={PutActor} bg="dark" className="p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="string"
                    value={actor_name}
                    onChange={(e) => setActorName(e.target.value)}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button
                    variant="secondary"
                    type="submit"
                    className="me-2"
                    href="/listactor"
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

export default UpdateActor