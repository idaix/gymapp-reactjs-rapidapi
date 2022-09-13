import React from 'react'

const Input = ({placeholder, type, value, setValue}) => (
    <input
        className='w-full py-2 px-6 border border-primary outline-none text-black'
        type={type}
        value={value}
        onChange={(e)=>setValue(e.target.value.toLowerCase())}
        placeholder={placeholder}
    />
)

export default Input