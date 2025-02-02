import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface MealData {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const AddMealDialog = () => {
  const [open, setOpen] = useState(false);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mealData: MealData = {
      name: mealName,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat)
    };

    // Add meal to local storage
    const existingMeals = JSON.parse(localStorage.getItem("meals") || "[]");
    const newMeal = {
      ...mealData,
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      items: mealName,
      image: "/placeholder.svg"
    };
    
    localStorage.setItem("meals", JSON.stringify([newMeal, ...existingMeals]));
    
    // Dispatch custom event to notify RecentMeals component
    window.dispatchEvent(new CustomEvent("mealsUpdated"));
    
    toast.success("Meal added successfully!");
    
    // Reset form and close dialog
    setMealName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button id="add-meal-dialog" className="hidden">Open</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Meal</DialogTitle>
          <DialogDescription>
            Enter the details of your meal below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="meal-name" className="text-right">
                Name
              </Label>
              <Input
                id="meal-name"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="calories" className="text-right">
                Calories
              </Label>
              <Input
                id="calories"
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="protein" className="text-right">
                Protein (g)
              </Label>
              <Input
                id="protein"
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="carbs" className="text-right">
                Carbs (g)
              </Label>
              <Input
                id="carbs"
                type="number"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fat" className="text-right">
                Fat (g)
              </Label>
              <Input
                id="fat"
                type="number"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Meal</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};