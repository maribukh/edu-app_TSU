import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CoursesList from "./components/CoursesList";
import AboutInstructor from "./components/AboutInstructor";
import Footer from "./components/Footer";
import CourseFinder from "./pages/CourseFinder";
import CourseDetails from "./pages/CourseDetails";

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
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
