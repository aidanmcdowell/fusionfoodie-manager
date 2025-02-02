import { Card } from "@/components/ui/card";
import { Clock, Utensils } from "lucide-react";

const meals = [
  {
    time: "8:30 AM",
    name: "Breakfast",
    items: "Oatmeal with berries, Banana",
    calories: 350,
    protein: "12g",
    carbs: "45g",
    fat: "8g"
  },
  {
    time: "12:30 PM",
    name: "Lunch",
    items: "Grilled chicken salad, Whole grain bread",
    calories: 450,
    protein: "35g",
    carbs: "30g",
    fat: "15g"
  },
  {
    time: "4:00 PM",
    name: "Snack",
    items: "Greek yogurt with honey",
    calories: 200,
    protein: "15g",
    carbs: "20g",
    fat: "5g"
  },
];

export const RecentMeals = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Utensils className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Today's Meals</h2>
      </div>
      <div className="space-y-4">
        {meals.map((meal, index) => (
          <Card 
            key={index} 
            className="p-4 bg-white hover:shadow-md transition-all duration-200 border-l-4 border-l-primary-light"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{meal.time}</span>
                  <h3 className="font-medium text-primary-dark">{meal.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{meal.items}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>Protein: {meal.protein}</span>
                  <span>Carbs: {meal.carbs}</span>
                  <span>Fat: {meal.fat}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-semibold text-primary">{meal.calories}</span>
                <span className="text-xs text-muted-foreground">calories</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};