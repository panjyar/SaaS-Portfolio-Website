import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider-horizontal"; 

export default function ImageComparisonSliderDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-lg border overflow-hidden aspect-[16/9]">
        <ImageComparisonSlider
          leftImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop"
          rightImage="https://vicasinfo.livnsense.com/media/industries/cement-plant.jpg"
          altLeft="A colorful mountain landscape at night"
          altRight="The same mountain landscape in black and white"
        />
      </div>
    </div>
  );
}
