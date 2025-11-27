import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Python from '../Courses/Python'
import Spring from '../Courses/Spring'
import Java from '../Courses/Java'
import Cloud from '../Courses/Cloud'
import Power from '../Courses/Power'
import Angular from '../Courses/Angular'
import Security from '../Courses/Security'

import './Course.css' 

function Course() {
  return (
    <>
      <div className="course-container">
        <div className="course-links">
          <Link to="/course/java">JAVA</Link>
          <Link to="/course/python">PYTHON</Link>
          <Link to="/course/spring">SPRING</Link>
          <Link to="/course/cloud-computing">CLOUD COMPUTING</Link>
          <Link to="/course/power-bi">POWER BI</Link>
          <Link to="/course/angular">ANGULAR</Link>
          <Link to="/course/sy-security">SY SECURITY</Link>
        </div>

        <div className="course-content">
          <Routes>
            <Route path="java" element={<Java />} />
            <Route path="python" element={<Python />} />
            <Route path="spring" element={<Spring />} />
            <Route path='cloud-computing' element={<Cloud/>}></Route>
            <Route path='power-bi' element={<Power/>}></Route>
            <Route path="angular" element={<Angular/>}></Route>
            <Route path='sy-security' element={<Security/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Course
