
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/ProjectSection/Project.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  
)
