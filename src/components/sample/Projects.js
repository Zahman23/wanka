import React, { useState, useEffect} from 'react'

// import projects data
import { projectsData } from '../../data'

//import projects nav data
import { projectsNav } from '../../data'

// import component project
import Project from './project'


const Projects = () => {
    const [item, setItem] = useState({name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        // get project base on item
        if(item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProject = projectsData.filter((project) => {
                return (
                    project.category.toLowerCase() === item.name
                )
            })
            setProjects(newProject)
        }
    }, [item])

    const handleClick = (e, idx) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(idx)
    }
 
    return (
    <div>
        <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                {projectsNav.map((item,idx) => {
                    return (
                        <li 
                        onClick={(e) => {
                            handleClick(e,idx)
                        }}
                        className={`${active === idx ? 'active' : ''} cursor-pointer capitalize m-4`}
                        key={idx}
                        >
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </nav>
        <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
            {projects.map((item) => {
                return (
                    <Project 
                    item={item} 
                    key={item.id}
                    />
                )
            })}
        </section>
    </div>
  )
}

export default Projects