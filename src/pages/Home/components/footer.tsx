import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t py-4 text-center text-sm text-muted-foreground",
        className
      )}
    >
      © {currentYear} Your Company. All rights reserved.
    </footer>
  );
}

export default Footer;
