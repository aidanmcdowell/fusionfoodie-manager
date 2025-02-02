import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const NutritionSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in">
      <Card className="p-5 bg-white hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Daily Calories</h3>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">1,200</span>
          <span className="text-muted-foreground text-sm self-end">/ 2,000</span>
        </div>
        <Progress value={60} className="h-2 bg-secondary" />
      </Card>
      
      <Card className="p-5 bg-white hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Protein</h3>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">45g</span>
          <span className="text-muted-foreground text-sm self-end">/ 80g</span>
        </div>
        <Progress value={56} className="h-2 bg-secondary" />
      </Card>
      
      <Card className="p-5 bg-white hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Water</h3>
        <div className="flex justify-between mb-3">
          <span className="text-2xl font-bold text-primary">1.2L</span>
          <span className="text-muted-foreground text-sm self-end">/ 2.5L</span>
        </div>
        <Progress value={48} className="h-2 bg-secondary" />
      </Card>
    </div>
  );
};