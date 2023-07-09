import React from "react";

const Body = () =>{
    return(
        <div className="flex w-full">
        <div className="grid grid-rows-6 gap-0 h-screen w-8/12 flex-grow card bg-base-300 rounded-box place-items-center m-6 ">
            <div className="join search-bar w-1/2">
                <input className="input input-bordered join-item w-3/4" placeholder="Search"/>
                <button className="btn join-item w-1/4 btn-accent">Search</button>
            </div>
        </div>
        <div className="grid h-screen w-4/12 flex-grow card bg-base-300 rounded-box place-items-center m-6">
            content
        </div>
        </div>
    )
}

export default Body;