import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CoursesList from "./components/CoursesList";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const LazyCourseFinder = lazy(() => import("./pages/CourseFinder"));
const LazyCourseDetails = lazy(() => import("./pages/CourseDetails"));

const LazyAboutInstructor = lazy(() => import("./components/AboutInstructor"));

const PageLoadingFallback = () => (
  <div className="flex min-h-[80vh] items-center justify-center">
    <p className="text-2xl text-neonBlue font-orbitron">Loading Page...</p>
  </div>
);

const SectionLoadingFallback = () => (
  <div className="flex h-64 items-center justify-center">
    <p className="text-lg text-neonBlue">Loading Section...</p>
  </div>
);

const MainPageLayout = () => (
  <>
    <Hero />
    <Features />
    <CoursesList />
    <Suspense fallback={<SectionLoadingFallback />}>
      <LazyAboutInstructor />
    </Suspense>
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/course-finder" element={<LazyCourseFinder />} />
            <Route path="/course/:id" element={<LazyCourseDetails />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
