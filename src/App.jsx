import { useEffect, useState } from 'react'
//import { u4 as uuidv4 } from 'uuidv'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='loading'>
        <h2></h2>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <article className='job-info'>
      <div className='title'>
        <h2>experience</h2>
        <div className=' title-underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
              >
                {item.company}
              </button>
            )
          })}
        </div>{' '}
        <article className='job-info'>
          <h3 className='job-title'>{title}</h3>
          <h4 className='job-company'>{company}</h4>{' '}
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            //const id = uuidv4()
            return (
              <div key={{ index }} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'> </FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>{' '}
      </div>
    </article>
  )
}
export default App
