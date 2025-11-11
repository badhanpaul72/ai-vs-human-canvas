import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const ImageComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSliderPosition((prev) => Math.max(0, prev - 2));
      } else if (e.key === "ArrowRight") {
        setSliderPosition((prev) => Math.min(100, prev + 2));
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* Non-AI Image (Left) */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-8xl">🏺</div>
            <Badge className="bg-muted text-foreground">Handcrafted</Badge>
          </div>
        </div>
      </div>

      {/* AI Image (Right) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-200"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-8xl">🤖</div>
            <Badge className="bg-accent text-accent-foreground">AI Generated</Badge>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-muted-foreground"></div>
            <div className="w-0.5 h-4 bg-muted-foreground"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4">
        <Badge className="bg-muted text-foreground">Handcrafted</Badge>
      </div>
      <div className="absolute bottom-4 right-4">
        <Badge className="bg-accent text-accent-foreground">AI Generated</Badge>
      </div>
    </div>
  );
};

export default ImageComparison;
