import Course from "../components/Course"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import list from "../../public/list.json"

console.log(list)

const Courses = () => {
  return (
   <>
   <Navbar />
   <div className="min-h-screen">
   <Course />
   </div>
   <Footer />
   </>
  )
}
export default Courses
