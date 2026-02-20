import { MessageCircle } from "lucide-react";

const WhatsAppSupport = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi Plutas Labs! I need help with RateMyCollege."
    );
    window.open(`https://wa.me/917780185418?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Need help? Chat with us!
      </span>
    </button>
  );
};

export default WhatsAppSupport;
