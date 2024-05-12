export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2234/Home">
                CS2234 Robot Design
              </a>
              <p className="wd-dashboard-course-title">
                Robtics Designer
              </p>
              <a href="#/Kanbas/Courses/2234/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/3234/Home">
                CS3234  Travel Assistant Development
              </a>
              <p className="wd-dashboard-course-title">
                Traveling App developer
              </p>
              <a href="#/Kanbas/Courses/3234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/4234/Home">
                CS4234 Game Development
              </a>
              <p className="wd-dashboard-course-title">
                Game developer
              </p>
              <a href="#/Kanbas/Courses/4234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5234/Home">
                CS5234 Game UI Design
              </a>
              <p className="wd-dashboard-course-title">
                Game UI developer
              </p>
              <a href="#/Kanbas/Courses/5234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6234/Home">
                CS6234 Automated Driving Development
              </a>
              <p className="wd-dashboard-course-title">
                Autonomous Car developer
              </p>
              <a href="#/Kanbas/Courses/6234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/7234/Home">
                CS7234 AI Foundation
              </a>
              <p className="wd-dashboard-course-title">
                Artifical intelligence developer
              </p>
              <a href="#/Kanbas/Courses/7234/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );
}
  