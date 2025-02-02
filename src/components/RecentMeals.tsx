import { Card } from "@/components/ui/card";

const meals = [
  {
    time: "8:30 AM",
    name: "Breakfast",
    items: "Oatmeal with berries, Banana",
    calories: 350,
  },
  {
    time: "12:30 PM",
    name: "Lunch",
    items: "Grilled chicken salad, Whole grain bread",
    calories: 450,
  },
  {
    time: "4:00 PM",
    name: "Snack",
    items: "Greek yogurt with honey",
    calories: 200,
  },
];

export const RecentMeals = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Today's Meals</h2>
      <div className="space-y-4">
        {meals.map((meal, index) => (
          <Card key={index} className="p-4 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{meal.time}</span>
                  <h3 className="font-medium">{meal.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{meal.items}</p>
              </div>
              <span className="text-primary font-medium">{meal.calories} cal</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};