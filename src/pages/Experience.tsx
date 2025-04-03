
export default function Experience() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Salesforce Python Developer Intern – Genpact</h3>
            <p className="text-sm text-gray-500">June 2022 – Aug 2022</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
              <li>Integrated tools reducing processing time by 30%</li>
              <li>Automated ticketing system using Python & DSA</li>
              <li>Managed SOAP/REST APIs, improving performance by 35%</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Python Developer Intern – AgroCep</h3>
            <p className="text-sm text-gray-500">March 2022 – May 2022</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
              <li>Built AI-powered agriculture system</li>
              <li>Designed scalable architecture on AWS</li>
              <li>Improved latency and cut costs by 25%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
