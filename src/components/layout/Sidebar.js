import React from 'react'
import { ListProjects } from '../Projects/ListProjects'
import { NewProject } from '../Projects/NewProject'

export const Sidebar = () => {

    return (
        <aside>
            <h1>MERN<span>TASKS</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Your projects</h2>
                <ListProjects />
            </div>
        </aside>
    )
}
