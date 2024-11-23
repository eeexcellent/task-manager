import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import EmptyStateScreen from "./components/EmptyStateScreen.jsx";

function App() {
  return (
    <>
      <main className="h-screen my-89 flex gap-8">
        <ProjectsSidebar />
        <EmptyStateScreen />
      </main>
    </>
  );
}

export default App;
