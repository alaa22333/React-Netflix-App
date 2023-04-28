
import {ImSpinner8 }from 'react-icons/im'

import React from 'react'

const Loading = () => {
    return( <div className="flex justify-center mt-72 animate-spin">
    <ImSpinner8 className='animate-spin text-red-800 text-5xl'/>

</div>)
}

export default Loading