import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t py-4 text-center text-sm text-muted-foreground",
        className
      )}
    >
      footer
    </footer>
  );
}

export default Footer;
