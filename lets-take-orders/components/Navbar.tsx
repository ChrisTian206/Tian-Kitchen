import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <Link href="/">Home</Link>
            <Link href="/new-order">New Order</Link>
            <Link href="/recommendation">Recommand</Link>
        </div>
    )
}

export default Navbar