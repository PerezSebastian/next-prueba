import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({msg: 'este es un producto'});
}

export function POST(){
    return NextResponse.json({msg: 'intentando crear producto'});
}