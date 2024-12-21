import React from "react";

const Contact = () => {
  return  <div className="flex w-full">
      <section className="h-screen bg-white-400 w-1/2  ">  
        <h2 className="font-black .font-mono text-4xl my-44 mx-14">Let's Discuss <span className="block">Your Next Project</span></h2>
      </section>
    
      <section className="w-1/2 my-44 mx-72">
      <input type="text" className="border-2 rounded-md w-full , px-3 h-10" placeholder="First Name" />
      </section>
      
    </div>
};

export default Contact;
