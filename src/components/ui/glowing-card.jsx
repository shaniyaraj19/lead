import { GlowingEffect } from "./glowing-effect";
import { cn } from "../../lib/utils";

const GlowingCard = ({ 
  children, 
  className, 
  glowProps = {}, 
  ...props 
}) => {
  const defaultGlowProps = {
    spread: 40,
    glow: true,
    disabled: false,
    proximity: 64,
    inactiveZone: 0.01,
    borderWidth: 2,
    ...glowProps
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <GlowingEffect {...defaultGlowProps} />
      {children}
    </div>
  );
};

export { GlowingCard };