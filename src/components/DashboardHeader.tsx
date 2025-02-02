import { Camera, Plus, Settings, Calendar, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleSnapFood = () => {
    // For now, show a toast until we implement camera functionality
    toast.info("Camera functionality coming soon!");
  };

  const handleAddMeal = () => {
    // We'll implement this next
    toast("Opening meal form...");
    document.getElementById("add-meal-dialog")?.click();
  };

  const handleHistory = () => {
    toast.info("Meal history coming soon!");
  };

  const handleCalendar = () => {
    toast.info("Calendar view coming soon!");
  };

  const handleSettings = () => {
    toast.info("Settings coming soon!");
  };

  return (
    <div className="w-full bg-white shadow-sm p-6 mb-6 rounded-xl animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">FusionFoodie</h1>
            <p className="text-muted-foreground text-sm">Smart AI Food Tracking</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleHistory}>
              <History className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCalendar}>
              <Calendar className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSettings}>
              <Settings className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            className="flex-1 bg-secondary hover:bg-secondary/80 border-primary-light"
            onClick={handleSnapFood}
          >
            <Camera className="w-4 h-4 text-primary" />
            Snap Food
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary-dark text-white"
            onClick={handleAddMeal}
          >
            <Plus className="w-4 h-4" />
            Add Meal
          </Button>
        </div>
      </div>
    </div>
  );
};