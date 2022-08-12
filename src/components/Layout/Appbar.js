import React from 'react'
import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from '../../utils'

export default function Appbar() {
    return (
        <div className='hidden fixed bg-green-200' style={{ height: APPBAR_HEIGHT, width: `calc(100% - ${SIDEBAR_WIDTH}px)`, left: SIDEBAR_WIDTH }} >Appbar</div>
    )
}
