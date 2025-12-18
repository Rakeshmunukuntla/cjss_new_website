import {
  Baby,
  BookOpen,
  Clock,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Competitive Compensation",
    desc: "Industry-leading salary packages with regular performance reviews.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Certifications, courses, workshops, and mentorship programs.",
    accent: "from-purple-500 to-blue-400",
  },
  {
    icon: Baby,
    title: "Parental Leave",
    desc: "Supportive policies that help balance family and career.",
    accent: "from-cyan-500 to-sky-400",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Mental Health",
    desc: "Wellness programs, mental health breaks, and employee support.",
    accent: "from-pink-500 to-rose-400",
  },
  {
    icon: Clock,
    title: "Generous Time Off",
    desc: "Flexible vacation days, wellness leaves, and holidays.",
    accent: "from-amber-500 to-orange-400",
  },
  {
    icon: Users,
    title: "Life Coverage",
    desc: "Comprehensive insurance and long-term security benefits.",
    accent: "from-emerald-500 to-green-400",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 bg-gradient-to-b from-white via-sky-50 to-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Benefits &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Perks
          </span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-lg text-slate-600">
          Designed to support your growth, wellbeing, and long-term success.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid max-w-6xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        {benefits.map((b, i) => {
          const Icon = b.icon;

          return (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-7 sm:p-8
                         border border-slate-200 shadow-md
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-2xl"
              onMouseMove={(e) => {
                if (window.innerWidth < 1024) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = ((y - rect.height / 2) / 25) * -1;
                const rotateY = (x - rect.width / 2) / 25;
                e.currentTarget.style.transform = `
                  perspective(900px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  translateY(-6px)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(900px) rotateX(0deg) rotateY(0deg)";
              }}
            >
              {/* Accent glow */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                            bg-gradient-to-br ${b.accent} blur-xl transition`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center
                              bg-gradient-to-br ${b.accent} text-white shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
