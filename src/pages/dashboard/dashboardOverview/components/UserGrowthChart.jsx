const dataPoints = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 25 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 70 },
];

const UserGrowthChart = () => {
  const width = 680;
  const height = 260; // smaller inner height
  const padding = 18; // reduced padding
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...dataPoints.map((d) => d.value));
  const minValue = Math.min(...dataPoints.map((d) => d.value));
  const valueRange = maxValue - minValue;

  const points = dataPoints.map((point, index) => {
    const x = padding + (index / (dataPoints.length - 1)) * chartWidth;
    const y =
      padding +
      chartHeight -
      ((point.value - minValue) / valueRange) * chartHeight;
    return { x, y };
  });

  const pathData = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <div className="w-full text-[#121111]">
      <div className="bg-white rounded-xl shadow-sm border border-[#F6B0B5] p-6 w-full h-[340px]">
        <h2 className="text-base font-semibold mb-1">User Growth</h2>

        <div className="relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-t border-gray-100"></div>
            ))}
          </div>

          {/* Smaller SVG */}
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-52"
            preserveAspectRatio="none"
          >
            <path
              d={pathData}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {points.map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#ef4444"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Smaller day labels */}
          <div className="flex justify-between mt-3 px-2">
            {dataPoints.map((point, index) => (
              <div key={index} className="text-xs text-red-300 font-medium">
                {point.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGrowthChart;
