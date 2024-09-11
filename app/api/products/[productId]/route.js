import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({msg: 'obteniendo un producto en especifico'})
}