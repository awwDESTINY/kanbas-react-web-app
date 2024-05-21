export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
            <img src="/images/reactjs.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS2234 Robot Design
              </a>
              <p className="wd-dashboard-course-title">
                Robtics Designer
              </p>
              <a href="#/Kanbas/Courses/2234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/3234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS3234  Travel Assistant Development
              </a>
              <p className="wd-dashboard-course-title">
                Traveling App developer
              </p>
              <a href="#/Kanbas/Courses/3234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/4234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS4234 Game Development
              </a>
              <p className="wd-dashboard-course-title">
                Game developer
              </p>
              <a href="#/Kanbas/Courses/4234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5234 Game UI Design
              </a>
              <p className="wd-dashboard-course-title">
                Game UI developer
              </p>
              <a href="#/Kanbas/Courses/5234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS6234 Automated Driving Development
              </a>
              <p className="wd-dashboard-course-title">
                Autonomous Car developer
              </p>
              <a href="#/Kanbas/Courses/6234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
          <img src="/images/reactjs.jpg"/>
          <div className="card-body">
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/7234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS7234 AI Foundation
              </a>
              <p className="wd-dashboard-course-title">
                Artifical intelligence developer
              </p>
              <a href="#/Kanbas/Courses/7234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
  );
}
  