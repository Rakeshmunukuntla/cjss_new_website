export default function CareerBackgroundWrapper({ children }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(transparent 79px, rgba(0,0,0,0.05) 80px), linear-gradient(90deg, transparent 79px, rgba(0,0,0,0.05) 80px)",
        backgroundSize: "80px 80px",
      }}
    >
      {/* soft glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/20 blur-[180px]" />

      {children}
    </div>
  );
}
