import { Card } from "@/components/ui/card";
import { Clock, Utensils, Camera, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Meal {
  id: number;
  time: string;
  name: string;
  items: string;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  image: string;
}

export const RecentMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: 1,
      time: "8:30 AM",
      name: "Breakfast",
      items: "Oatmeal with berries, Banana",
      calories: 350,
      protein: "12g",
      carbs: "45g",
      fat: "8g",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      time: "12:30 PM",
      name: "Lunch",
      items: "Grilled chicken salad, Whole grain bread",
      calories: 450,
      protein: "35g",
      carbs: "30g",
      fat: "15g",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      time: "4:00 PM",
      name: "Snack",
      items: "Greek yogurt with honey",
      calories: 200,
      protein: "15g",
      carbs: "20g",
      fat: "5g",
      image: "/placeholder.svg"
    },
  ]);

  const handleEditMeal = (meal: Meal) => {
    toast.info("Edit meal functionality coming soon!");
  };

  const handleDeleteMeal = (id: number) => {
    setMeals(meals.filter(meal => meal.id !== id));
    toast.success("Meal deleted successfully!");
  };

  const handleAddPhoto = (meal: Meal) => {
    toast.info("Photo upload functionality coming soon!");
  };

  const handleViewAll = () => {
    toast.info("View all meals functionality coming soon!");
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Today's Meals</h2>
        </div>
        <Button variant="outline" size="sm" onClick={handleViewAll}>
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {meals.map((meal) => (
          <Card 
            key={meal.id} 
            className="p-4 bg-white hover:shadow-md transition-all duration-200 border-l-4 border-l-primary-light"
          >
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-lg bg-accent overflow-hidden">
                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
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
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-lg font-semibold text-primary">{meal.calories}</span>
                    <span className="text-xs text-muted-foreground">calories</span>
                    <div className="flex gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleEditMeal(meal)}
                      >
                        <Edit2 className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleAddPhoto(meal)}
                      >
                        <Camera className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Meal</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this meal? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDeleteMeal(meal.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};