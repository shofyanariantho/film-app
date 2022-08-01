import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CreateImageFilm = (img) => {
        const [Image, setImage] = useState("");
        const [ImagePreview, setImagePreview] = useState("");
        const { id } = useParams();
    
        const onSubmit = () => {
            console.log("image : ", Image)
            console.log(ImagePreview)
    
            const data = new FormData();
            data.append("image : ", Image);
    
            axios.post(`http://localhost:8000/film/image/${id}`, data,
                { withCredentials: true },
                {
                    Headers: {
                        'content-type': 'multipart/form-data',
                    }
                }
            )
                .then(res => {
                    console.log("alhamdulillah sukses ya bro", res)
                })
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
                {img && <img src={img} alt="tes" />}
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

export default CreateImageFilm;