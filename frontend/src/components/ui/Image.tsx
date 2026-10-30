import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export const Image: React.FC<ImageProps> = ({ alt, src, className = '', ...props }) => {
  return (
    <img
      alt={alt}
      src={src}
      className={`object-cover ${className}`}
      onError={(e) => {
        // Fallback styling if remote image fails
        (e.target as HTMLElement).style.opacity = '0.5';
      }}
      {...props}
    />
  );
};
