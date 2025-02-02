import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Protein", value: 30 },
  { name: "Carbs", value: 45 },
  { name: "Fat", value: 25 },
];

const COLORS = ["#9b87f5", "#D6BCFA", "#7E69AB"];

export const MacroDistribution = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Macro Distribution</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};