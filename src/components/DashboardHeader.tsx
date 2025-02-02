import { Camera, Plus, Settings, Calendar, History } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <div className="w-full bg-white shadow-sm p-6 mb-6 rounded-xl animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">FusionFoodie</h1>
            <p className="text-muted-foreground text-sm">Smart AI Food Tracking</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <History className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon">
              <Calendar className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            className="flex-1 bg-secondary hover:bg-secondary/80 border-primary-light"
          >
            <Camera className="w-4 h-4 text-primary" />
            Snap Food
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-dark text-white">
            <Plus className="w-4 h-4" />
            Add Meal
          </Button>
        </div>
      </div>
    </div>
  );
};