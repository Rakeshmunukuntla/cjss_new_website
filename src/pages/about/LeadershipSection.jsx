import { LEADERS } from "../../Constants";

export const LeadershipSection = () => {
  return (
    <section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-indigo-50">
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-indigo-200/40 blur-[160px] rounded-full -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-purple-200/40 blur-[160px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <h2 className="mb-24 text-4xl md:text-5xl font-bold text-center text-slate-900">
          Executive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-sky-500">
            Leadership
          </span>
        </h2>

        <div className="space-y-28">
          {LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="group opacity-0 translate-y-6 animate-fadeInUp"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {idx % 2 === 0 ? (
                /* IMAGE LEFT / TEXT RIGHT */
                <div className="grid items-center gap-14 md:grid-cols-2">
                  {/* IMAGE */}
                  <div className="flex justify-center">
                    <div className="relative group-hover:scale-[1.04] transition-transform duration-500">
                      {/* Soft aura */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300/30 to-purple-300/30 blur-3xl"></div>

                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative w-80 h-80 object-cover rounded-full border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="space-y-5">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-600">
                      Leadership Spotlight
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                      {leader.name}
                    </h3>

                    <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                      {leader.designation}
                    </p>

                    <div className="pl-6 border-l-4 border-gradient-to-b from-indigo-400 to-purple-400">
                      <p className="text-lg leading-relaxed text-slate-600">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* TEXT LEFT / IMAGE RIGHT */
                <div className="grid items-center gap-14 md:grid-cols-2">
                  {/* TEXT */}
                  <div className="space-y-5">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-600">
                      Leadership Spotlight
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                      {leader.name}
                    </h3>

                    <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                      {leader.designation}
                    </p>

                    <div className="pl-6 border-l-4 border-gradient-to-b from-indigo-400 to-purple-400">
                      <p className="text-lg leading-relaxed text-slate-600">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="flex justify-center">
                    <div className="relative group-hover:scale-[1.04] transition-transform duration-500">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300/30 to-purple-300/30 blur-3xl"></div>

                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative w-80 h-80 object-cover rounded-full border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
        `}
      </style>
    </section>
  );
};

export default LeadershipSection;
