import React from 'react'
import './Calendar.css'
import LeetCodeCalendar from 'leetcode-calendar'
import GitHubCalendar from 'react-github-calendar'

const Calendar = () => {
  return (
    <section className="blog container section" id="calendar">
      <h2 className="section__title">Calendar</h2>

      <div className="row">
        <div className="row" style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
            Days I Coded
          </h1>
          <GitHubCalendar username="stringAna" blockSize={15} blockMargin={5} color="#c084f5" fontSize={16} />
        </div>
        <div className="row" style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
            Days I LeetCode
          </h1>
          <LeetCodeCalendar username="antflies" blockSize={15} blockMargin={5} color="#c084f5" fontSize={16} />
        </div>
      </div>
    </section>
  )
}

export default Calendar
