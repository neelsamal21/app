//First create fucntion of component match name of file
"use client";
import React, {useState} from "react";

export default function DailyThought()
{
    return( 
        <div className  = "bg-[#ff0000] text-white p-6 rounded-xl shadow-md text-center max-w-md w-full">
            <h2 className  = "text-xl font-bold mb-3">Daily Thoughts </h2>
            <textarea
            placeholder="Type your thought for the day ..."
            className="w-full rounded-md text-white focus:outline-none"
            />
        </div>
    );
}