import { pool } from "../db";

import { NextResponse } from "next/server";

export async function GET() {
    const query = "select * from tlaliware";
    try {
        const res = await pool.query(query);
        return NextResponse.json(
            {
                data: res
            },
            {
                status: 200
            }
        );
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            err
        }, {
            status: 500
        })
    }
}

export async function POST(request) {
    const { name, email, telefono, dir, date } = await request.json();

    const query = "insert into tlaliware(name,tel,email,domicilio,fecha) values($1,$2,$3,$4,$5)";
    
    try {
        await pool.query(query, [name, telefono, email, dir, date]);
        return NextResponse.json(
            {
                status: 200
            }
        )
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            err
        }, {
            status: 500
        })
    }
}