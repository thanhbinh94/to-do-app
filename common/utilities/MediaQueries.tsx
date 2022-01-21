export const breakpoints = {
    smm: 320, // For modal
    sm: 375,
    md: 425,
    lg: 768,
    xl: 1024
  };
  
  export const MediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
      `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
  };
  