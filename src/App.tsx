import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import CoursesList from "./components/CoursesList.tsx";
import AboutInstructor from "./components/AboutInstructor.tsx";
import Footer from "./components/Footer.tsx";
import CourseFinder from "./pages/CourseFinder.tsx";

// A layout component for the main page to keep the code clean
const MainPageLayout = () => (
  <>
    <Hero />
    <Features />
    <CoursesList />
    <AboutInstructor />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPageLayout />} />
          <Route path="/course-finder" element={<CourseFinder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
