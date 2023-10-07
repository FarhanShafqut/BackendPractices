// BODY
// BODY
// BODY
// BODY
import { NextResponse } from "next/server";
export const GET = () =>{
    console.log(`hello`)
    let server = {
        title : 'ssaas',
        title1 : 'ssaas',
        title2 : 'ssaas'
    }
    return NextResponse.json(server)
}

// body ma key and pair dobule me deni ha
export const POST =  async (req) =>{
    const body = await req.json()
    return NextResponse.json({messsage: 'chutiya',body})
}
export const DELETE = () =>{
    return NextResponse.json({messsage: 'delete'})
}
export const PUT = () =>{
    return NextResponse.json({messsage: 'PUT'})
}