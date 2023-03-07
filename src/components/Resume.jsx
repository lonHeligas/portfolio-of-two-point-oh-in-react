import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import "../styles/resume.css"


const Resume = (props) => {


  return (
    <>      
      <div class="name">
      <h1>Lon Heligas - WIP</h1>
    </div>
    <div class="address-info">
      <div class="address"><h4>St. Paul, MN</h4></div>
      <div class="ph-number"><h4>651.253.4403</h4></div>
      <div class="email"><h4>lon.heligas@gmail.com</h4></div>
    </div>
    {/* <div class="divider"></div> */}

    <div class="prof-summary">
      <h2>Professional Summary</h2>
      <div class="summary-text">
        <p>
          Highly experienced web-based Content Developer with strong editing
          skills and an excellent knowledge of management of said projects.
          Works closely with project team members to problem solve, devise and
          format website content as per Style Guides.
        </p>
      </div>
    </div>

    <div class="experience>">
      <div class="experience-title">
        <h2>Experience:</h2>
        <div>
          <div class="company">
            <div class="company-title">
              <h3>Allen Interactions</h3>
            </div>
            <div class="work-role">
              <h5>Custom Content Developer 2015-2022</h5>
              <div class="role-bullet">
                <ul>
                  <li>
                    Championed the conversion of strategic customer legacy Flash
                    content into a modern HTML+JavaScript environment,
                    delivering a month early and under budget to the delight of
                    the client.
                  </li>
                  <li>
                    Orchestrated new standard processes to simplify content
                    migration, reducing content development times by 70%.
                  </li>
                  <li>
                    Developed automation tools to reduce redundancy and enhance
                    workflow, resulting in a 50% reduction in content migration
                    times.
                  </li>
                  <li>
                    Created and delivered end-user training on content
                    management systems enabling client self-service.
                  </li>
                  <li>
                    Prepared documentation and technical manuals for in-house
                    software tools.
                  </li>
                  <li>
                    Engaged clients to gather software requirements/business
                    rules, ensure alignment with development teams, and defined
                    requirements to enable successful projects and high customer
                    satisfaction,
                  </li>
                  <li>
                    Partnered closely with team members to keep projects on
                    track and meet anticipated deadlines.
                  </li>
                </ul>
              </div>
            </div>
            <div class="work-role">
              <h5>Interaction Developer 2005-2016</h5>
              <div class="role-bullet">
                <ul>
                  <li>
                    Designed user-friendly software interfaces to streamline
                    access and comprehension resulting in award-winning courses
                    for Motorola.
                  </li>
                  <li>
                    Tested software to ensure a high-quality experience through
                    troubleshooting, testing, and coding,
                  </li>
                  <li>
                    Spearheaded the documentation of technical specifications
                    and created project testing methods used in software
                    auditing.
                  </li>
                  <li>
                    Strategized with project managers to understand system load
                    limitations and plan strategies to meet customer demands.
                  </li>
                  <li>
                    Collaborated with product and engineering team members to
                    define and develop new product concepts.
                  </li>
                </ul>
              </div>
            </div>
            <div class="work-role">
              <h5>Quality Assurance Specialist 2004-2007</h5>
              <div class="role-bullet">
                <ul>
                  <li>
                    Identified issues in software processes and implemented
                    optimization techniques resulting in productivity increase.
                  </li>
                  <li>
                    Assisted clients and internal staff with troubleshooting to
                    quickly resolve software issues.
                  </li>
                  <li>
                    Delivered end-user training on content management systems
                    allowing staff to make easy updates and maintenance to
                    websites.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="education">
          <h3>Education:</h3>
          <div class="education-info">
            <p>ST. CLOUD STATE UNIVERSITY, St. Cloud, MN</p>
            <p>
              Bachelor of Arts, Major: English-Writing Minor: Graphic Design
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Resume;