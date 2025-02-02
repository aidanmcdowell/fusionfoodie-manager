import { DashboardHeader } from "@/components/DashboardHeader";
import { NutritionSummary } from "@/components/NutritionSummary";
import { RecentMeals } from "@/components/RecentMeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary p-4">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <NutritionSummary />
        <RecentMeals />
      </div>
    </div>
  );
};

export default Index;