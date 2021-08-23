import { Header } from "../layout/Header"
import { Sidebar } from "../layout/Sidebar"
import { ListTask } from "../tasks/ListTask"
import { TaskForm } from "../tasks/TaskForm"

export const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <main>
                    <Header />
                    <TaskForm />
                    <div className="contenedor-tareas">
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    )
}
