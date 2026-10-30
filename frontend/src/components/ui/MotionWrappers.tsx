import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

/**
 * Reusable Natural Easing Curve
 * Memberikan animasi yang luwes, organik, dan tidak kaku (robotik).
 */
export const EASING_NATURAL = [0.22, 1, 0.36, 1] as const;
export const EASING_SPRING = { type: 'spring', stiffness: 80, damping: 22, mass: 0.9 } as const;

/**
 * Variants untuk Staggered Container
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Variants untuk Fade Up Item
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING_NATURAL,
    },
  },
};

/**
 * Variants untuk Fade In dari Kiri ke Kanan (Left to Right)
 */
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASING_NATURAL,
    },
  },
};

/**
 * Variants untuk Spring Scale In
 */
export const scaleInSpringVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: EASING_SPRING,
  },
};

/**
 * Props untuk StaggerContainer Component
 */
export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
  delayStart?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  staggerDelay = 0.1,
  delayStart = 0.1,
  once = true,
  className = '',
  children,
  ...props
}) => {
  const customVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Props untuk ScrollReveal Component
 */
export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.7,
  once = true,
  className = '',
  children,
  ...props
}) => {
  const initialOffset = {
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASING_NATURAL,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
