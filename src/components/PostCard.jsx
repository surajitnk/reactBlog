import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { uploadPost } from '../store/postsSlice'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'

function PostCard({$id, title, featuredImage}) {
 const dispatch = useDispatch();
 useEffect(() => {
 dispatch(uploadPost((appwriteService.getFilePreview(featuredImage))))
 }, [])

  
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={(appwriteService.getFilePreview(featuredImage))} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
    
  )
}


export default PostCard