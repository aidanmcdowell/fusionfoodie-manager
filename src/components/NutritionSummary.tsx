import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const NutritionSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in">
      <Card className="p-4 bg-white">
        <h3 className="text-lg font-medium mb-2">Calories</h3>
        <div className="flex justify-between mb-2">
          <span className="text-2xl font-bold text-primary">1,200</span>
          <span className="text-muted-foreground">/ 2,000</span>
        </div>
        <Progress value={60} className="h-2" />
      </Card>
      
      <Card className="p-4 bg-white">
        <h3 className="text-lg font-medium mb-2">Protein</h3>
        <div className="flex justify-between mb-2">
          <span className="text-2xl font-bold text-primary">45g</span>
          <span className="text-muted-foreground">/ 80g</span>
        </div>
        <Progress value={56} className="h-2" />
      </Card>
      
      <Card className="p-4 bg-white">
        <h3 className="text-lg font-medium mb-2">Water</h3>
        <div className="flex justify-between mb-2">
          <span className="text-2xl font-bold text-primary">1.2L</span>
          <span className="text-muted-foreground">/ 2.5L</span>
        </div>
        <Progress value={48} className="h-2" />
      </Card>
    </div>
  );
};