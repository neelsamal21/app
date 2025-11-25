import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

//A GET funciton reutrns some data based on a request
export async function GET()
{
    try{
       //COnnection returns a promise
       //Placeholder for the value that will evnentaully be returrned 
       
        const connection = await mysql.createPool({
            host :   process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASS,
            database:process.env.DB,
        });

        const[rows] = await connection.execute("SELECT id, skill, description FROM Competency ORDER BY skill ASC");

        return NextResponse.json({competencies:rows},{status:200});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({error: "ailed to fetch competenices"},{status:500});


    }
    
    
    


}