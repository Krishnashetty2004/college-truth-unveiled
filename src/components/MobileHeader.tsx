import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchDialog from "@/components/SearchDialog";
import logoImg from "@/assets/logo.jpeg";

const MobileHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-sm"
    >
      {/* Logo & Brand */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logoImg} alt="RateMyCollege" className="h-8 w-8 rounded-lg object-cover" />
        <span className="font-display text-lg font-semibold text-foreground">RateMyCollege</span>
      </Link>

      {/* Search Button */}
      <SearchDialog />
    </motion.header>
  );
};

export default MobileHeader;
