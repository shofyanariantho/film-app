import React from 'react'
import { BsFilm } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import '../style/AddComponent.css'


function AddComponent() {
  return (
    <div>
        <div className="title_style bg-primary">
                <p className='text-white'>Come on give your rating</p>
                <div className="content_style">
                    <p className='desc_style'><BsFilm className='icons_group'/>Add Film & Rating</p>
                    <p className='desc_style'><HiOutlineUserGroup className='icons_group'/>Add Actor & Director</p>
                </div>
            </div>
    </div>
  )
}

export default AddComponent