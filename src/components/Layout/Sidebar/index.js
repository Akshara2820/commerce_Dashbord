import React from 'react'
import styled from 'styled-components'
import { SIDEBAR_WIDTH } from '../../../utils';

export default function Sidebar() {
    return (
        <Root className='bg-blue-900 fixed hidden lg:block' >Sidebar</Root>
    )
}


const Root = styled.div`
width: ${SIDEBAR_WIDTH}px;
`;