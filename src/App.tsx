import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CoursesList from "./components/CoursesList";
import AboutInstructor from "./components/AboutInstructor";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <Hero />
          <Features />
          <CoursesList />
          <AboutInstructor />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
