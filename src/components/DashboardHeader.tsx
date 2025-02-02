import { CalendarDays, Camera, PieChart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <div className="w-full bg-white shadow-sm p-4 mb-6 rounded-lg animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">NutriTrack AI</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/80"
          >
            <Camera className="w-4 h-4" />
            Snap Food
          </Button>
          <Button className="flex items-center gap-2 bg-primary hover:bg-primary-dark">
            <Plus className="w-4 h-4" />
            Add Meal
          </Button>
        </div>
      </div>
    </div>
  );
};