import React from 'react'
import './Summary.css'

const Summary = () => {
  return (
    <div className='summary'>
        <div className='container'>
            <div className='summary-statement'>
                <h1>Objective</h1>
                <p>Currently a graduate student pursuing a Master's Degree in Computer Science,</p>
                <p>at the University of California - Riverside,</p>
                <p>with the current goal of attaining an internship or full time entry level positions,</p>
                <p>to further expand and improve my skills and add on upon my skill sets.</p>
            </div>    
        </div>
        <div className='container2'>
            <div className='summary-statement2'>
                <h1>Education</h1>
                <h4>University of California - Riverside - M.S.</h4>
                <h6>January 2022 - Present</h6>
                <h4>University of California - Riverside - B.S.</h4>
                <h6>September 2019 - December 2021</h6>
            </div>    
        </div>
        <div className='container3'>
            <div className='summary-statement3'>
                <h1>Certificates</h1>
                <h4>Google Data Analytics - Coursera</h4>
                <h6>Issued: July 1, 2022</h6>
            </div>    
        </div>
    </div>
  )
}

export default Summary