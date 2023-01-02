import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='form'>
        <div className='b-form'>
            <form>
                <input type="text" id="fname" name="fname"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    </div>
  )
}

export default Body