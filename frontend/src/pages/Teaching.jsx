import CollegeAdmissionHome from '../components/CollegeAdmissionHome'
import Teaching02 from '../components/Teaching02'

const Teaching = () => {
  const para1 = "In India, teaching is one of the most respected and rewarding professions that offers both personal satisfaction and career stability. It allows individuals to shape young minds, inspire future generations, and play a vital role in nation-building. Teachers enjoy secure jobs, steady income, and opportunities for growth across schools, colleges, and online education platforms, along with a healthy work-life balance."
  const para2 = "To build a career in this field, you can pursue specialized courses such as the Bachelor of Education (B.Ed.) for general teaching or Bachelor of Physical Education (B.P.Ed.) for sports and physical education. Those aiming for advanced expertise can opt for a Master of Education (M.Ed.), which provides deeper knowledge of educational methods and leadership, opening doors to higher academic or administrative roles."
  const title = "Teaching (B.ED | BP.ED | M.ED)"

  return (
    <div>
       <CollegeAdmissionHome para1={para1} para2={para2} title={title} />
      <Teaching02/>
    </div>
  )
}

export default Teaching
