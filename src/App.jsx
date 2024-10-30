import React, { useState } from 'react'
import './App.css'
import { commentsData } from './commentData'

function App () {
  return (
    <div>
      <div className='commentData'>
        {commentsData.map(comm => (
          <Comment data={comm} key={comm.id} />
        ))}
      </div>
    </div>
  )
}

function Comment ({ data }) {

  const [show, setShow] = useState(false)
  const [commentsData,setCommentsData]=useState(data)

  const handleShow = () => {
    setShow(!show)
  }

  const handleComment = ()=>{

  }
  const findByCommentId=(id,data)=>{
    for(let key of Object.keys(data)){
      console.log(key)
      if(data[key] == id){
        return data
      }
    }

    // if(item.reply && item.reply.length){
    //   const nesteItem = findByCommentId(id,item.reply)
    //   if(nesteItem){
    //     return nesteItem
    //   }
    // }

      return null
  }

  
  function updateDate(result,data){
  
    for(let key of Object.keys(data)){
      if(data[key] == result.id){
        return data.like = data.like+1;
      }
    }

      
  
  }
  const handleLike = (likes,data) => {
    const result = findByCommentId(likes,data)
    console.log(result)

    updateDate(result,data)
   
  }
  return (
    <>
      <div>
        <div className='commentSection'>
          <div className='commentDiv' onClick={handleShow}>
            <input value={data.comment}  onChange={handleComment}/>
            {/* {data.comment} */}
          </div>
          <div className='iconSection' key={data.id}>
            <span onClick={() => handleLike(data.id,data)}>
              <i className='fa-regular fa-thumbs-up'></i>
              {data.like}
            </span>
            <span>
              <i className='fa-regular fa-thumbs-down'></i>
              {data.dislike}
            </span>
            <span>
              <i className='fa-solid fa-reply'></i>
            </span>
          </div>
        </div>
        <div className='commentRec'>
          {show &&
            data.reply.map((com, index) => <Comment key={com.id} data={com} />)}
        </div>
      </div>
    </>
  )
}

export default App
