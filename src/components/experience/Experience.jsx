import React from 'react'
import './experience.css'
import WorkdayIcon from '../../assets/Workday-Emblem.png'
import { MdCircle } from 'react-icons/md'

const Experience = () => {
  return (
    <section id = 'experience'>
        <h2>Experience</h2>
        <div className="container experience__container">
            <div className="experience__card">
                <div >
                    <img src={WorkdayIcon} className="experience__card-img"></img>
                </div>
                <h3> Workday </h3>
                <h4>
                    Software Application Engineer Co-op
                </h4>

                <ul>
                    <li>Collaborated with the team to build customer-facing web-based business application using JavaScript/React alongside additional backend tools</li>
                    <li>Configured RESTful APIs and proxy endpoints</li>
                    <li>Deployed application to Linux based Node.js Web server</li>
                    <li>Actively participated in code reviews and software development using Agile/Scrum process</li>
                </ul>


            </div>


        </div>
    </section>
  )
}

export default Experience