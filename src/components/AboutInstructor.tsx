import { academyData } from "../data/academyData";

export default function AboutInstructor() {
  const { instructor } = academyData;

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-12 text-center">
        My Journey in Development
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="aspect-square w-full max-w-sm mx-auto md:max-w-none rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-sm text-[#E0E0E0]/70">
          {instructor.imageUrl ? (
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
          <h3 className="text-2xl font-semibold">{instructor.name}</h3>
          <p className="mt-1 text-neonBlue">{instructor.title}</p>
          <p className="mt-4 text-base text-[#E0E0E0]/90">{instructor.bio}</p>

          <div className="mt-6 border-t border-white/10 pt-6">
            <h4 className="font-semibold tracking-widest text-sm uppercase text-[#E0E0E0]/80 mb-4">
              Education & Key Programs
            </h4>
            <div className="space-y-4">
              {instructor.educationHistory.map((item) => (
                <div key={item.id}>
                  <p className="font-semibold">
                    {item.title}{" "}
                    <span className="text-sm text-[#E0E0E0]/70 font-normal">
                      ({item.period})
                    </span>
                  </p>
                  <p className="text-sm text-neonBlue">{item.source}</p>
                  <p className="mt-1 text-sm text-[#E0E0E0]/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
