import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Instagram, Loader2 } from "lucide-react";

// Category to gradient mapping
const CATEGORY_GRADIENTS: Record<string, string> = {
  campus_life: "from-purple-600 via-pink-500 to-rose-500",
  placement_experience: "from-blue-600 via-cyan-500 to-teal-400",
  hostel_life: "from-orange-500 via-amber-400 to-yellow-400",
  ragging: "from-red-700 via-red-600 to-orange-500",
  fest_culture: "from-violet-600 via-purple-500 to-fuchsia-500",
  faculty_stories: "from-emerald-600 via-teal-500 to-cyan-400",
  admission_journey: "from-indigo-600 via-blue-500 to-sky-400",
  funny: "from-pink-500 via-rose-400 to-orange-400",
  horror: "from-slate-900 via-purple-900 to-violet-800",
  inspirational: "from-amber-500 via-orange-400 to-rose-400",
  confession: "from-red-600 via-pink-500 to-rose-400",
  other: "from-gray-600 via-slate-500 to-zinc-400",
};

// Category emoji mapping
const CATEGORY_EMOJI: Record<string, string> = {
  campus_life: "🏫",
  placement_experience: "💼",
  hostel_life: "🏠",
  ragging: "⚠️",
  fest_culture: "🎪",
  faculty_stories: "☕",
  admission_journey: "🎯",
  funny: "😂",
  horror: "😱",
  inspirational: "✨",
  confession: "🔥",
  other: "💬",
};

// Category label mapping
const CATEGORY_LABELS: Record<string, string> = {
  campus_life: "Campus Life",
  placement_experience: "Placement Horror",
  hostel_life: "Hostel Life",
  ragging: "Ragging Truth",
  fest_culture: "Fest Culture",
  faculty_stories: "Professor Tea",
  admission_journey: "Admission Journey",
  funny: "Funny AF",
  horror: "Horror Story",
  inspirational: "Inspirational",
  confession: "Confession",
  other: "Story",
};

interface ShareStoryCardProps {
  isOpen: boolean;
  onClose: () => void;
  story: {
    id: string;
    title: string;
    content: string;
    category: string;
    upvote_count: number;
    downvote_count?: number;
  };
  collegeName: string;
}

export default function ShareStoryCard({
  isOpen,
  onClose,
  story,
  collegeName,
}: ShareStoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const gradient = CATEGORY_GRADIENTS[story.category] || CATEGORY_GRADIENTS.other;
  const emoji = CATEGORY_EMOJI[story.category] || "💬";
  const categoryLabel = CATEGORY_LABELS[story.category] || "Story";
  const netScore = (story.upvote_count || 0) - (story.downvote_count || 0);

  // Truncate content for preview
  const truncatedContent = story.content.length > 280
    ? story.content.slice(0, 280) + "..."
    : story.content;

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `story-${story.id.slice(0, 8)}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="flex items-center gap-2">
            <Instagram className="h-5 w-5" />
            Share to Instagram Story
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          {/* Preview Card - Scaled down for preview */}
          <div className="flex justify-center mb-4">
            <div
              ref={cardRef}
              className={`relative w-[270px] h-[480px] bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {/* Decorative circles */}
              <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-white/10 rounded-full blur-xl" />
              <div className="absolute top-1/2 left-[-20px] w-24 h-24 bg-white/5 rounded-full blur-lg" />

              {/* Content wrapper */}
              <div className="relative h-full flex flex-col p-5">
                {/* Glassmorphism card */}
                <div
                  className="flex-1 rounded-2xl p-5 flex flex-col"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{emoji}</span>
                    <span className="text-white/90 text-xs font-medium uppercase tracking-wider">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white font-bold text-lg leading-tight mb-3">
                    {story.title}
                  </h2>

                  {/* Content preview */}
                  <p className="text-white/80 text-xs leading-relaxed flex-1 overflow-hidden">
                    "{truncatedContent}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/20 my-3" />

                  {/* Footer info */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="text-sm">📍</span>
                      <span className="text-xs font-medium truncate">{collegeName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="text-sm">🔥</span>
                      <span className="text-xs font-medium">{netScore} upvotes</span>
                    </div>
                  </div>
                </div>

                {/* Branding */}
                <div className="mt-4 text-center">
                  <p className="text-white font-bold text-sm tracking-wide">
                    ✨ RateMyCollege
                  </p>
                  <p className="text-white/60 text-[10px] mt-0.5">
                    Anonymous college stories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <Button
            onClick={handleDownload}
            disabled={isGenerating}
            className="w-full gap-2"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download for Instagram
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-3">
            Download and share to your Instagram Story!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
