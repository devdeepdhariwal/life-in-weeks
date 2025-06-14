import React from "react";

export default function Dashboard() {
  const birthdateStr = localStorage.getItem("birthdate");
  const birthdate = new Date(birthdateStr);
  const today = new Date();

  const lifeExpectancy = 90;
  const totalWeeks = lifeExpectancy * 52;
  const livedWeeks = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24 * 7));
  const remainingWeeks = totalWeeks - livedWeeks;
  const currentAge = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24 * 365.25));

  const weeks = Array.from({ length: totalWeeks }, (_, i) => i);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">👤 Your Life Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Current Age</h2>
          <p className="text-3xl font-bold text-blue-600">{currentAge} years</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Weeks Lived</h2>
          <p className="text-3xl font-bold text-blue-600">{livedWeeks}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Weeks Remaining</h2>
          <p className="text-3xl font-bold text-red-500">{remainingWeeks}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Life Progress</h2>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${(livedWeeks / totalWeeks) * 100}%` }}
          />
        </div>
        <p className="text-sm mt-1 text-gray-600">{((livedWeeks / totalWeeks) * 100).toFixed(2)}% complete</p>
      </div>

      {/* Life Timeline Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Timeline (1 box = 1 week)</h2>
        <div className="overflow-x-auto border rounded-lg p-4 bg-white shadow-inner">
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: "repeat(52, 10px)",
              width: "max-content",
            }}
          >
            {weeks.map((week, i) => (
              <div
                key={i}
                title={`Week ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-sm ${
                  i < livedWeeks ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
