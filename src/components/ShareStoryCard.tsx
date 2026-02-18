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

  const emoji = CATEGORY_EMOJI[story.category] || "💬";
  const categoryLabel = CATEGORY_LABELS[story.category] || "Story";
  const netScore = (story.upvote_count || 0) - (story.downvote_count || 0);

  // Truncate content for preview
  const truncatedContent = story.content.length > 250
    ? story.content.slice(0, 250) + "..."
    : story.content;

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#E8E0D5",
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `ratemycollege-story-${story.id.slice(0, 8)}.png`;
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
          {/* Preview Card - Matches app's warm, earthy design */}
          <div className="flex justify-center mb-4">
            <div
              ref={cardRef}
              style={{
                width: "270px",
                height: "480px",
                background: "linear-gradient(165deg, #E8E0D5 0%, #DED4C7 50%, #D4C9BA 100%)",
                borderRadius: "16px",
                overflow: "hidden",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                position: "relative",
              }}
            >
              {/* Subtle decorative shapes */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  background: "rgba(59, 71, 92, 0.06)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  background: "rgba(179, 107, 77, 0.08)",
                  borderRadius: "50%",
                }}
              />

              {/* Content wrapper */}
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                {/* Main card */}
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255, 255, 255, 0.85)",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(59, 71, 92, 0.1)",
                    boxShadow: "0 4px 20px rgba(30, 25, 20, 0.08)",
                  }}
                >
                  {/* Category badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ fontSize: "28px" }}>{emoji}</span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        color: "#3B475C",
                        background: "rgba(59, 71, 92, 0.08)",
                        padding: "4px 10px",
                        borderRadius: "12px",
                      }}
                    >
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#1E1915",
                      marginBottom: "12px",
                    }}
                  >
                    {story.title}
                  </h2>

                  {/* Content preview */}
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.6,
                      color: "#5C5347",
                      flex: 1,
                      overflow: "hidden",
                    }}
                  >
                    "{truncatedContent}"
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(59, 71, 92, 0.12)",
                      margin: "14px 0",
                    }}
                  />

                  {/* Footer info - College & Votes */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>📍</span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#3B475C",
                        }}
                      >
                        {collegeName}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>🔥</span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#B36B4D",
                        }}
                      >
                        {netScore} upvotes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Branding */}
                <div
                  style={{
                    marginTop: "16px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#3B475C",
                      letterSpacing: "0.3px",
                    }}
                  >
                    RateMyCollege
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#8B8078",
                      marginTop: "2px",
                    }}
                  >
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
