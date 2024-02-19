import { NextRequest, NextResponse } from "next/server";
const { Pool } = require('pg');

export async function POST(req:NextRequest){
   
    const input=await req.json()
    console.log(input.search)
    let data:any;
    const pool = new Pool({
        user: 'postgres.nwclbsxownipdsaoshnh',
        host: 'aws-0-us-west-1.pooler.supabase.com',
        database: 'postgres',
        password: '36hNGUAwqzhPrQg1',
        port: 5432,
    });
    //malicious input 'OR''='

    const userInput =input.search;
    const query = `
        SELECT * FROM product
        WHERE product_name = '${userInput}'
    `;

    try {
        const result = await pool.query(query);
        // console.log('Query result:', result.rows);
        data = result.rows;
        console.log(data);
        pool.end();
    } catch (err:any) {
        console.error('Error executing query:', err.stack);
        // Handle the error if needed
        data = []; // or any other default value
    }

    // Return the response
    return NextResponse.json(data);
}
