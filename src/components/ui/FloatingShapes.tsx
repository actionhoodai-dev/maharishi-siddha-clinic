import { motion } from 'framer-motion';

const OrganicShape = ({
  className = '',
  delay = 0,
  color = 'accent',
}: {
  className?: string;
  delay?: number;
  color?: 'accent' | 'primary' | 'muted';
}) => {
  const colorClasses = {
    accent: 'bg-accent/10',
    primary: 'bg-primary/5',
    muted: 'bg-muted/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1, ease: 'easeOut' }}
      className={`absolute rounded-full blur-3xl ${colorClasses[color]} ${className}`}
      style={{
        animation: `float ${6 + delay * 2}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large background shapes */}
      <OrganicShape
        className="w-[600px] h-[600px] -top-40 -right-40"
        delay={0}
        color="accent"
      />
      <OrganicShape
        className="w-[500px] h-[500px] top-1/2 -left-60"
        delay={0.5}
        color="primary"
      />
      <OrganicShape
        className="w-[400px] h-[400px] bottom-20 right-1/4"
        delay={1}
        color="muted"
      />
      
      {/* Smaller accent shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-gold/5 blur-2xl animate-float"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-accent/10 blur-xl animate-float-delayed"
      />
    </div>
  );
};

export default FloatingShapes;
