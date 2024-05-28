import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard() {
  const courses = db.courses;
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
            <img src="/images/reactjs.jpg" alt="React JS Course Cover"/>
            <div className="card-body">
              <div className="wd-dashboard-course-link"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                {course.name}
              </div>
              <div className="wd-dashboard-course-title card-text" style={{ maxHeight: 48, overflow: "hidden" }}>
                {course.description}
              </div>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
            </div>
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>
  );
}
  