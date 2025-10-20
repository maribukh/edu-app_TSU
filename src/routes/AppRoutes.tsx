import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CoursesList from "../components/CoursesList";
import CourseFinder from "../pages/CourseFinder";

const MainPageLayout = () => (
  <>
    <Hero />
    <Features />
    <CoursesList />
  </>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />} />
      <Route path="/course-finder" element={<CourseFinder />} />
    </Routes>
  );
}
