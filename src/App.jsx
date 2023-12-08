import "./index.css";
import { ThemeProvider } from "./context/Theme/ThemeProvider";
import TaskList from "./components/TaskList";
import ToggleTheme from "./components/ToggleTheme";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="w-full min-h-screen font-normal text-dtVeryDarkDesaturatedBlue dark:text-lightGrayishBlue flex justify-center items-center px-6 py-[40px] md:px-8 bg-mobile-light bg-veryLightGray dark:bg-dtVeryDarkBlue dark:bg-mobile-dark min-[376px]:bg-desktop-light min-[376px]:dark:bg-desktop-dark bg-contain min-[376px]:bg-auto bg-top bg-no-repeat">
      <section className="w-full max-w-[540px] flex flex-col">
        <ThemeProvider>
          <ToggleTheme />
          <TaskForm />
          <TaskList />
        </ThemeProvider>
        <p className="mt-[100px] sm:mt-[42px] text-sm text-center text-dtDarkGrayishBlue">
          Drag and drop to reorder list
        </p>
      </section>
    </main>
  );
}

export default App;
