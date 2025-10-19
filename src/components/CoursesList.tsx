import { academyData } from "../data/academyData";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  return (
    <section id="courses" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-8">
        Наши Программы Обучения
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {academyData.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
