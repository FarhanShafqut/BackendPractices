// PARMAS
// PARMAS
// PARMAS
// PARMAS
import { NextResponse } from "next/server";
export const GET = (req,route) =>{
    // console.log('roue',route.params)
    return NextResponse.json({mess:'111',dta : route.params.userName})
}

