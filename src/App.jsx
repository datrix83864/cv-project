import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Work from './components/Work'
import './App.css'

function App() {
  const [edit, setEdit] = useState(false)
  const [person, setPerson] = useState({name: 'John Doe', email: 'john.doe@example.com', phone: '555-555-5555'})
  const [school, setSchool] = useState({school: 'University of Idaho', study: 'Secondary Education', start: '2009', end: '2015'})
  const [work, setWork] = useState({company: 'Lake Pend Oreille School District', position: 'Computer Science Teacher', years: '7', description: 'Present'})

  const handleEdit = () => {
    if(edit) {
      handleChange()
    }
    setEdit(!edit)
  }

  const handleChange = () => {
    const newPerson = {...person, name: document.getElementById('name').value, email: document.getElementById('email').value, phone: document.getElementById('phone').value}
    const newSchool = {...school, school: document.getElementById('school').value, study: document.getElementById('study').value, start: document.getElementById('start').value, end: document.getElementById('end').value}
    const newWork = {...work, company: document.getElementById('company').value, position: document.getElementById('position').value, years: document.getElementById('years').value, description: document.getElementById('description').value}
    setPerson(newPerson)
    setSchool(newSchool)
    setWork(newWork)
  }

  if (edit) {
    return (
      <>
        <GeneralInfo name={person.name} email={person.email} phone={person.phone} status={edit}/>
        <div className="education">
            <h2>Education</h2>
            <p>School: <input type="text" defaultValue={school.school} id='school'/></p>
            <p>Study: <input type="text" defaultValue={school.study} id='study'/></p>
            <p>Start: <input type="text" defaultValue={school.start} id='start'/></p>
            <p>End: <input type="text" defaultValue={school.end} id='end'/></p>
        </div>
        <div className="education">
            <h2>Work</h2>
            <p>Company: <input type="text" defaultValue={work.company} id='company'/></p>
            <p>Position: <input type="text" defaultValue={work.position} id='position'/></p>
            <p>Years: <input type="text" defaultValue={work.years} id='years'/></p>
            <p>Description: <input type="text" defaultValue={work.description} id='description'/></p>
        </div>
        <button onClick={handleEdit}>Submit</button>
      </>
    )
  } else {
  return (
    <>
      <GeneralInfo name={person.name} email={person.email} phone={person.phone} status={edit}/>
      <Education school={school.school} study={school.study} start={school.start} end={school.end} />
      <h2>Work Experience</h2>
      <Work company={work.company} position={work.position} years={work.years} description={work.description} />
      <button onClick={handleEdit}>Edit</button>
    </>
  )
  }
}

export default App
