import React from 'react';
import { Link } from 'react-router-dom';
import '../../StyleComponents/btn.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";



function index() {
  return (
    <>
      <div className='cont-btn'>
        <Link to='/' className='btnLink'>
          <BsFillArrowLeftCircleFill  size={'3em'} />
        </Link>
      </div>
    </>
  )
}

export default index