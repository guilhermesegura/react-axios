import blogFetch from "../axios/config"

import { useNavigate } from "react-router-dom"

import { useState } from "react"

import "./NewPost.css"
const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e)=> {
    e.preventDefault()

    const post = {title, body, userId: 1}

    await blogFetch.post("/posts", {
      body: post,
    })
    navigate("/")
  }

  return <div className='new-post'>
    <h2>inserir novo Post:</h2>
    <form onSubmit={(e)=> createPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" placeholder='Digite o tìtulo' onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea  id="body" name="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}/>
      </div>
      <input type="submit" value="Criar Post" className='btn' />
    </form>
  </div>
}

export default NewPost