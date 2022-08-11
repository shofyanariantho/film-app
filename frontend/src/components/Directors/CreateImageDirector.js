import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CreateImageDirector = ({ img }) => {
    const [Image, setImage] = useState("");
    const [ImagePreview, setImagePreview] = useState("");
    const { id } = useParams();
    const redirect = useNavigate();

    const onSubmit = () => {

        const Data = new FormData();
        Data.append("director_image", Image);

        axios.post(`http://localhost:8000/director/image/${id}`, Data,
            { withCredentials: true },
            {
                Headers: {
                    'content-type': 'multipart/form-data',
                }
            }
        )
            .then(res => {
                console.log("alhamdulillah sukses ya bro", res)
            },
            redirect('/listdirector')
            )
            .catch(err => {
                console.log(err)
            })
    }


    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
    return (

        <div>
            {img && <img src={img} />}
            <Form.Group controlId="formFile" className="p-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={(e) => onImageUpload(e)} img={ImagePreview} />
            </Form.Group>

            <Button variant="primary" onClick={onSubmit} className="m-3 mt-0 w-25">
                Submit
            </Button>
        </div>
    )
}

export default CreateImageDirector;