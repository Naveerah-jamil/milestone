import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl '> technologies</h2>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea laborum veniam quas repellendus soluta enim repellat ullam ad? Labore, corrupti?</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2 '>
                        <h1>Typescript</h1>
                        <h2>React js</h2>
                        <h2>Next js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h1>Tailwind</h1>
                        <h2>React js</h2>
                        <h2>Next js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
