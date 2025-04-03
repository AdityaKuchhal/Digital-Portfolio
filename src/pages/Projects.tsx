import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Degraded Script Identification</h3>
            <p className="text-gray-600">
              Used OpenCV + ML (CNN, SVM) to detect degraded scripts. Published in IJCDS.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Webcam Motion Detector</h3>
            <p className="text-gray-600">
              Motion-based surveillance system using OpenCV + Bokeh charts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">HR Dashboard</h3>
            <p className="text-gray-600">
              Tableau dashboard with dynamic filters using Python + Faker dataset.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Distance Detection System</h3>
            <p className="text-gray-600">
              Arduino + Python sensor system (won 1st place at Tinker Fest).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
