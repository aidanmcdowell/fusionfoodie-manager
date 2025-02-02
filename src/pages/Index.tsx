import { DashboardHeader } from "@/components/DashboardHeader";
import { NutritionSummary } from "@/components/NutritionSummary";
import { RecentMeals } from "@/components/RecentMeals";
import { WeeklyProgress } from "@/components/WeeklyProgress";
import { MacroDistribution } from "@/components/MacroDistribution";
import { AddMealDialog } from "@/components/AddMealDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <DashboardHeader />
        <NutritionSummary />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeeklyProgress />
          <MacroDistribution />
        </div>
        <RecentMeals />
        <AddMealDialog />
      </div>
    </div>
  );
};

export default Index;