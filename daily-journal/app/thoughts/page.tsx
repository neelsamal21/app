"use client";
import React, {useState, useEffect } from "react";
export default function ThoughtsPage() {
     const [input,setInput] = useState("");
        const [thoughts,setThoughts] = useState<{text:string, time:string}[]>([]);
        useEffect(()=> {
                const savedThoughts = localStorage.getItem("dailyThoughts");
                if(savedThoughts)
                {
                    setThoughts(JSON.parse(savedThoughts));
                }
            },[])
    return(
        
        <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className = "text-2xl font-bold mb-4 text-[#ff0000]">All my Thoughts</h2>
            <div className="mt-5 space-y-3 text-left">
                {thoughts.length === 0 ? (<p className="italic text-center"> No thoughts yet. Start Typing. </p>): 
                    thoughts.map((thought,index) => (
                        <div
                            key={index}
                            className="bg-white/20 p-3 rounded-lg shadow-sm">
                            <p className = "text-lg">{thought.text}</p>
                            <p className = "text-sm opacity-80 mt-1">{thought.time}</p>
                        </div>
                    
                ))}
            </div>
        </div>
        
        
        
        
    )
}