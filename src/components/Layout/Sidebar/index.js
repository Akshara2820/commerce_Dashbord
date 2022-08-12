import React from 'react'
import styled from 'styled-components'
import { SIDEBAR_WIDTH} from '../../../utils';
import Dashbord from './dashbord';
import Profile from './profile';

export default function Sidebar() {
    return (
        <Root className='bg-blue-200 fixed lg:block hidden h-full overflow-auto' >

        <Profile/>
        <Dashbord/>
        
        </Root>
    )
}


const Root = styled.div`
width: ${SIDEBAR_WIDTH}px;

`;