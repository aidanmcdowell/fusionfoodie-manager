import { Camera, Plus, Settings, Calendar, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleSnapFood = () => {
    // Open device camera
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          // Create a video element to show the camera feed
          const video = document.createElement('video');
          video.srcObject = stream;
          document.body.appendChild(video);
          video.play();
          
          // Take a snapshot after 3 seconds
          setTimeout(() => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(video, 0, 0);
            
            // Stop the camera and remove video element
            stream.getTracks().forEach(track => track.stop());
            document.body.removeChild(video);
            
            // Convert to base64 and process
            const imageData = canvas.toDataURL('image/jpeg');
            processImage(imageData);
          }, 3000);
        })
        .catch(() => {
          toast.error("Unable to access camera. Please check permissions.");
        });
    } else {
      toast.error("Camera not available on this device.");
    }
  };

  const processImage = (imageData: string) => {
    // Process the image data
    toast.success("Food image captured successfully!");
    document.getElementById("add-meal-dialog")?.click();
  };

  const handleAddMeal = () => {
    document.getElementById("add-meal-dialog")?.click();
  };

  const handleHistory = () => {
    navigate("/history");
  };

  const handleCalendar = () => {
    navigate("/calendar");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="w-full bg-white shadow-sm p-6 mb-6 rounded-xl animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">FusionFoodie</h1>
            <p className="text-muted-foreground text-sm">Smart AI Food Tracking</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleHistory}>
              <History className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCalendar}>
              <Calendar className="w-5 h-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSettings}>
              <Settings className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            className="flex-1 bg-secondary hover:bg-secondary/80 border-primary-light"
            onClick={handleSnapFood}
          >
            <Camera className="w-4 h-4 text-primary" />
            Snap Food
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary-dark text-white"
            onClick={handleAddMeal}
          >
            <Plus className="w-4 h-4" />
            Add Meal
          </Button>
        </div>
      </div>
    </div>
  );
};