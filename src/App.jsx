import { useState } from "react";

import AddProject from "./components/AddProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSelected from "./components/ProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCreateProject(projectData) {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        projectId,
        ...projectData,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.projectId !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleClearTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleAddTask(taskText) {
    setProjectsState((prevState) => {
      const newTaskId = Math.random();

      const newTask = {
        taskId: newTaskId,
        projectId: prevState.selectedProjectId,
        text: taskText,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.projectId === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <ProjectSelected
      project={selectedProject}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      tasks={selectedProjectTasks}
      onClearTask={handleClearTask}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <AddProject
        onAdd={handleCreateProject}
        onCancel={handleCancelAddProject}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-89 flex gap-8">
        <ProjectsSidebar
          projects={projectsState.projects}
          onStartAddProject={handleAddProject}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
