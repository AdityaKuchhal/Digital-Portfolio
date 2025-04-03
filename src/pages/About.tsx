import React from "react";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-gray-600 text-lg">
            Python Developer and Data Analyst with expertise in AI, Machine Learning, Model Validation, and Risk Management. Proficient in Python, SQL, NumPy, Pandas, and SciPy.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p>Python, SQL, Java, C/C++, R</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visualization</h3>
            <p>Excel, Matplotlib, Seaborn, Alteryx, Power BI, Tableau</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p>TensorFlow, PyTorch, NLP, Model Validation</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
            <p>Flask, Django, Streamlit, Git</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <p>Problem Solving, Organization, Time Management, Storytelling</p>
          </div>
        </div>
      </div>
    </div>
  );
}
