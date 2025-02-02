import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", calories: 1800 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1950 },
  { day: "Thu", calories: 2200 },
  { day: "Fri", calories: 1850 },
  { day: "Sat", calories: 2300 },
  { day: "Sun", calories: 1900 },
];

export const WeeklyProgress = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Bar dataKey="calories" fill="#9b87f5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};