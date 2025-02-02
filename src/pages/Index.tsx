import { DashboardHeader } from "@/components/DashboardHeader";
import { NutritionSummary } from "@/components/NutritionSummary";
import { RecentMeals } from "@/components/RecentMeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <DashboardHeader />
        <NutritionSummary />
        <RecentMeals />
      </div>
    </div>
  );
};

export default Index;