import React from 'react'

const fetchproduct1 = async () => {
    let res =  await fetch('http://localhost:3000/api/post',{
        cache : 'no-cache'
    })
    let response1 = await res.json()
    return response1
}

const Post = async () => {
    const  fetchproduct = await fetchproduct1();
  return (
    <div>
        {fetchproduct.map((e)=>{
            return(
                <div>
                <h1>{e.id}</h1>
                <h1>{e.name}</h1>
                <h1>{e.description}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Post