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
  placement_experience: "Placement",
  hostel_life: "Hostel Life",
  ragging: "Ragging",
  fest_culture: "Fest Culture",
  faculty_stories: "Prof Tea",
  admission_journey: "Admission",
  funny: "Funny",
  horror: "Horror",
  inspirational: "Inspiring",
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

  // Dynamic truncation based on title length
  const titleLength = story.title.length;
  const maxContentLength = titleLength > 60 ? 380 : titleLength > 40 ? 420 : 480;

  const truncatedContent = story.content.length > maxContentLength
    ? story.content.slice(0, maxContentLength) + "..."
    : story.content;

  // Truncate title if too long
  const truncatedTitle = story.title.length > 80
    ? story.title.slice(0, 80) + "..."
    : story.title;

  // Shorter college name for display
  const shortCollegeName = collegeName.length > 35
    ? collegeName.slice(0, 35) + "..."
    : collegeName;

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
                  width: "100px",
                  height: "100px",
                  background: "rgba(59, 71, 92, 0.05)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  width: "80px",
                  height: "80px",
                  background: "rgba(179, 107, 77, 0.06)",
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
                  padding: "14px",
                }}
              >
                {/* Main card */}
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "12px",
                    padding: "14px",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(59, 71, 92, 0.08)",
                    boxShadow: "0 2px 12px rgba(30, 25, 20, 0.06)",
                  }}
                >
                  {/* Header row: emoji + category + college */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "20px" }}>{emoji}</span>
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.3px",
                          color: "#3B475C",
                          background: "rgba(59, 71, 92, 0.08)",
                          padding: "3px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        {categoryLabel}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 500,
                        color: "#6B635A",
                      }}
                    >
                      📍 {shortCollegeName}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: "#1E1915",
                      marginBottom: "10px",
                    }}
                  >
                    {truncatedTitle}
                  </h2>

                  {/* Content - takes all remaining space */}
                  <div
                    style={{
                      flex: 1,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        lineHeight: 1.55,
                        color: "#4A443D",
                        margin: 0,
                      }}
                    >
                      {truncatedContent}
                    </p>
                  </div>

                  {/* Footer row: upvotes + read more hint */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      paddingTop: "10px",
                      borderTop: "1px solid rgba(59, 71, 92, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "12px" }}>🔥</span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#B36B4D",
                        }}
                      >
                        {netScore} upvotes
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "9px",
                        color: "#8B8078",
                        fontStyle: "italic",
                      }}
                    >
                      Read full story →
                    </span>
                  </div>
                </div>

                {/* Branding - compact */}
                <div
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#3B475C",
                      letterSpacing: "0.2px",
                      margin: 0,
                    }}
                  >
                    RateMyCollege
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#8B8078",
                      marginTop: "1px",
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
