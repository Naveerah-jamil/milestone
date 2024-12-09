import React from 'react'



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'> Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Drop me aline, give a call or message by submit
                </p>
                <div className='flex-gap-3 items-center'>
        
                </div>
                <div className='flex-gap-3 items-center'>
                
                </div>
                <div className='flex-gap-3 items-center'>
                    
                    </div>
                    <div className='space-y-8'>
                        Name:
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Name"></label>
                            <input type="text"
                            className='h-[40px] bg-transparent border border-accent' 
                            id='name'/>

                        </div>

                        <div className='flex flex-col gap-1'>
                            Email
                            <label htmlFor="Email"></label>
                            <input type="text"
                            className='h-[40px] bg-transparent border border-accent' 
                            id='email'/>

                        </div>
                        Messeges:
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Messeges"></label>
                            <textarea 
                            className= "bg-transparent border border-accent"
                            id='msg' rows={8}>
                                </textarea>
                        </div>
                        <button className='bg-accent p-2 px-6 rounded bg-white text-black'>Send</button>
                         </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
