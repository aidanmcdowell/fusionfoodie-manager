import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Flame, Droplet, Apple } from "lucide-react";
import { useState, useEffect } from "react";

export const NutritionSummary = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [waterIntake, setWaterIntake] = useState(1.2);

  // Daily goals
  const CALORIE_GOAL = 2000;
  const PROTEIN_GOAL = 80;
  const WATER_GOAL = 2.5;

  useEffect(() => {
    // Calculate totals from meals
    const calculateTotals = () => {
      const meals = JSON.parse(localStorage.getItem("meals") || "[]");
      const calories = meals.reduce((sum: number, meal: any) => sum + Number(meal.calories), 0);
      const protein = meals.reduce((sum: number, meal: any) => sum + Number(meal.protein), 0);
      
      setTotalCalories(calories);
      setTotalProtein(protein);
    };

    // Calculate initial totals
    calculateTotals();

    // Listen for updates
    window.addEventListener("mealsUpdated", calculateTotals);

    return () => {
      window.removeEventListener("mealsUpdated", calculateTotals);
    };
  }, []);

  const handleWaterClick = () => {
    const newWaterIntake = Math.min(waterIntake + 0.25, WATER_GOAL);
    setWaterIntake(newWaterIntake);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in">
      <Card className="p-5 bg-white hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-medium text-muted-foreground">Daily Calories</h3>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">{totalCalories}</span>
          <span className="text-muted-foreground text-sm self-end">/ {CALORIE_GOAL}</span>
        </div>
        <Progress value={(totalCalories / CALORIE_GOAL) * 100} className="h-2 bg-secondary" />
      </Card>
      
      <Card className="p-5 bg-white hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Apple className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-medium text-muted-foreground">Protein</h3>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">{totalProtein}g</span>
          <span className="text-muted-foreground text-sm self-end">/ {PROTEIN_GOAL}g</span>
        </div>
        <Progress value={(totalProtein / PROTEIN_GOAL) * 100} className="h-2 bg-secondary" />
      </Card>
      
      <Card 
        className="p-5 bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        onClick={handleWaterClick}
      >
        <div className="flex items-center gap-2 mb-2">
          <Droplet className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-medium text-muted-foreground">Water</h3>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">{waterIntake.toFixed(1)}L</span>
          <span className="text-muted-foreground text-sm self-end">/ {WATER_GOAL}L</span>
        </div>
        <Progress value={(waterIntake / WATER_GOAL) * 100} className="h-2 bg-secondary" />
      </Card>
    </div>
  );
};