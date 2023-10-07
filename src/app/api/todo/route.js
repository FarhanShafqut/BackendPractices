// KEY PAIRRR
// KEY PAIRRR
// KEY PAIRRR
// KEY PAIRRR
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

export const POST = (req) =>{
    const tt = new URL(req.url).searchParams.get('key')
    return NextResponse.json({messsage: 'chutiya',data: tt})
}
export const DELETE = () =>{
    return NextResponse.json({messsage: 'delete'})
}
export const PUT = () =>{
    return NextResponse.json({messsage: 'PUT'})
}