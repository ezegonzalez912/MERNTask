import { ProjectProvider } from "./context/projects/ProjectContext";
import { TasksProvider } from "./context/tasks/TasksContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <ProjectProvider>
      <TasksProvider>
        <AppRouter />
      </TasksProvider>
    </ProjectProvider>
  );
}

export default App;
