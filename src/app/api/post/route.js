import { NextResponse } from "next/server"
var post = [
    {
        id: 1,
        name: 'farhan',
        description: 'pagal',
    },
    {
        id: 2,
        name: 'marsad',
        description: 'pagali',
    },
]

export const GET =()=>{
    return NextResponse.json(post)
}
export const POST = async (req)=>{
    const body = await req.json()
    post.push(body)
    return NextResponse.json({message : 'data is posted'})
}
export const DELETE =(req)=>{
    const id = new URL (req.url).searchParams.get('id')
    post = post.filter((post)=>post.id != id )
    return NextResponse.json({message : 'deleted'})
}
export const PUT = async (req)=>{
    const body = await req.json()
    post = post.map((post)=>{
        if (post.id == body.id){
            return body
        }
        else{
            return post
        }
    })
    return NextResponse.json({message : 'data is posted'})
}