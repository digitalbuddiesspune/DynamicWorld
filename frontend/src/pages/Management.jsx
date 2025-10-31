import React from 'react'
import Management01 from '../components/Management01'
import Management02 from '../components/Management02'
import CollegeAdmissionHome from '../components/CollegeAdmissionHome'

const Management = () => {
  const para1 = "Business Management courses equip individuals with the skills needed to successfully manage and operate a business. These programs cover areas such as finance, human resources, marketing, administration, and production. Eligibility typically requires completing Class 12 from a recognized board. Popular entrance exams for admission include CAT, MAT, CMAT, MAH CET, and TISS NET."
  const para2 = "Graduates of Business Management courses can pursue diverse career paths across industries such as banking, consulting, marketing, human resources, and operations. These programs not only develop leadership and strategic thinking abilities but also emphasize practical skills through internships, case studies, and industry projects. With globalization and the rise of startups, demand for skilled business managers continues to grow, making this field a strong choice for students aiming for managerial or entrepreneurial roles in both national and international organizations."
  const title = "MANAGEMENT (MBA | BBA | PGDM | BMS)"
  return (
    <div>
      <CollegeAdmissionHome para1={para1} para2={para2} title={title}/>
      <Management02/>
    </div>
  )
}

export default Management
