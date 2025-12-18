"use client";

import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
import { useState } from "react";

export default function UploadResumeSection() {
  const [file, setFile] = useState(null);
  const [uploadLocked, setUploadLocked] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | uploading | done

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const handleFileSelection = async (selectedFile) => {
    if (uploadLocked) return;

    setFile(selectedFile);
    setStatus("uploading");

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const res = await fetch(
        "https://server-node-cjss.onrender.com/resumes/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.success) {
        setStatus("idle");
        setPopup({
          show: true,
          message: "Upload failed. Please try again.",
          type: "error",
        });
        return;
      }

      setStatus("done");
      setUploadLocked(true);

      setPopup({
        show: true,
        message: "Your resume has been uploaded successfully!",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setPopup({
        show: true,
        message: "Something went wrong. Try again later.",
        type: "error",
      });
    }
  };

  return (
    <section className="relative w-full px-4 py-24 sm:px-6 bg-gradient-to-b from-white via-sky-50 to-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Upload Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Resume
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600">
          Share your profile with us and our recruitment team will reach out to
          you shortly.
        </p>
      </div>

      {/* Upload Box */}
      <div
        className={`
          relative max-w-3xl mx-auto p-10 rounded-3xl
          border-2 border-dashed transition-all duration-300
          ${
            uploadLocked
              ? "border-slate-300 bg-slate-100 opacity-70 pointer-events-none"
              : "cursor-pointer border-blue-300 bg-white hover:border-blue-500 hover:shadow-xl"
          }
        `}
        onClick={() => {
          if (!uploadLocked) {
            document.getElementById("resumeInput")?.click();
          }
        }}
      >
        <UploadCloud className="w-16 h-16 mx-auto mb-4 text-blue-600" />

        <p className="text-lg sm:text-xl font-semibold text-slate-900 text-center">
          {status === "done"
            ? "Resume Uploaded Successfully"
            : file
            ? "Uploading your resume..."
            : "Click to select your resume"}
        </p>

        <p className="mt-2 text-sm text-center text-slate-500 break-all">
          {file ? file.name : "Supported formats: PDF, DOC, DOCX"}
        </p>

        <input
          id="resumeInput"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          disabled={uploadLocked}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileSelection(e.target.files[0]);
            }
          }}
        />
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md text-center animate-pop">
            {popup.type === "success" ? (
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
            ) : (
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
            )}

            <p className="text-lg font-semibold text-slate-900">
              {popup.message}
            </p>

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-6 px-6 py-2 rounded-full font-semibold
                         bg-gradient-to-r from-blue-600 to-cyan-500
                         text-white hover:opacity-90 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Popup animation */}
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.25s ease-out;
        }
      `}</style>
    </section>
  );
}
