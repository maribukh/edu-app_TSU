import { academyData } from "../data/academyData";

export default function AboutInstructor() {
  const { instructor } = academyData;

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-8">
        О Вашем Инструкторе
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="aspect-square w-full rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-sm text-[#E0E0E0]/70">
          {/* Фото-плейсхолдер */}
          {instructor.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={instructor.name}
              src={instructor.imageUrl}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <span>Photo Placeholder</span>
          )}
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">{instructor.name}</h3>
          <p className="mt-1 text-[#E0E0E0]/80">{instructor.title}</p>
          <p className="mt-4 text-sm md:text-base text-[#E0E0E0]/90">{instructor.bio}</p>
        </div>
      </div>
    </section>
  );
}
