import React from 'react'
import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from '../../utils'
import Appbar from './Appbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    return (
        <div className='lg:h-screen ' >



            <div className='md:flex-1  h-full flex flex-col' >
                <Appbar />
                <div style={{}} className="bg-gray-100" >


                    {children}
                </div>
            </div>
        </div>
    )
}
