import React from 'react'

const Input = ({placeholder, type}) => (
    <input
        className='w-full py-2 px-6 border border-primary outline-none text-black'
        type={type}
        placeholder={placeholder}
    />
)

export default Input