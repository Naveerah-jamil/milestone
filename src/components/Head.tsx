import React from 'react'
interface propsType {
    title: string;
}
const Head: React.FC<propsType> = ({title}) => {
    return (
        <div className='text-cente text-4xl pb-8'>
            <p className='border-b-4 inline-block pb-2 bg-slate-950'>{title}</p>
        </div>
    )
}
export default Head;
