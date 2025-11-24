// Premium Educational Color Schemes
// Following 60-30-10 rule: 60% neutral, 30% primary, 10% accent

// 1. Trustworthy & Global Combination (Blue & Green)
// Perfect for Sidebar and main pages - establishes trust and reliability
export const TRUSTWORTHY_GLOBAL = {
  // Primary Color: Deep Blue (Navy Blue or Cobalt Blue)
  primary: "#0047AB", // Navy Blue
  primaryDark: "#192A56", // Darker Navy Blue
  primaryLight: "#1E40AF", // Lighter Navy Blue
  primaryAccent: "#DBEAFE", // Soft Blue Background
  
  // Secondary/Accent Color: Vibrant Teal or Bright Green
  secondary: "#009688", // Vibrant Teal
  secondaryAlt: "#2ecc71", // Bright Green
  secondaryLight: "#4ECDC4", // Light Teal
  secondaryAccent: "#E0F2F1", // Soft Teal Background
  
  // Neutral Colors (60% of design)
  neutral: "#F4F4F4", // Off-White
  neutralAlt: "#ecf0f1", // Light Grey
  background: "#FFFFFF", // Pure White
  backgroundAlt: "#F4F4F4", // Off-White Background
  
  // Text Colors
  text: "#2B2B2B", // Dark Grey (high contrast)
  textMuted: "#6B7280", // Medium Grey
  textLight: "#9CA3AF", // Light Grey
  
  // Call-to-Action (10% of design)
  cta: "#FF8C00", // Bright Orange
  ctaAlt: "#FFD700", // Gold Yellow
  ctaHover: "#FFA500", // Orange Hover
  
  // Borders & Dividers
  border: "#E5E7EB", // Light Grey Border
  borderDark: "#D1D5DB", // Medium Grey Border
  
  // Semantic Colors
  success: "#2ecc71", // Green for success
  warning: "#FFD700", // Gold for warnings
  error: "#E74C3C", // Red for errors
  info: "#009688", // Teal for info
};

// 2. Academic & Sophisticated Combination (Maroon & Gold)
// Premium rich colors for DynamicWorldInfo.jsx - classic, high-quality feel
export const ACADEMIC_SOPHISTICATED = {
  // Primary Color: Deep Maroon or Burgundy
  primary: "#800000", // Deep Maroon
  primaryDark: "#900C3F", // Burgundy
  primaryLight: "#A52A2A", // Light Maroon
  primaryAccent: "#FEE2E2", // Soft Maroon Background
  
  // Secondary Color: Warm Gold or Light Yellow-Orange
  secondary: "#FFD700", // Warm Gold
  secondaryAlt: "#FFA500", // Light Yellow-Orange
  secondaryLight: "#FFE87C", // Light Gold
  secondaryAccent: "#FFF8DC", // Cream Gold Background
  
  // Neutral Colors (60% of design)
  neutral: "#FAF0E6", // Cream
  neutralAlt: "#F5F5DC", // Beige
  background: "#FFFFFF", // Pure White
  backgroundAlt: "#FAF0E6", // Cream Background
  
  // Text Colors
  text: "#2B2B2B", // Dark Grey (high contrast)
  textMuted: "#6B7280", // Medium Grey
  textLight: "#9CA3AF", // Light Grey
  
  // Call-to-Action (10% of design)
  cta: "#4169E1", // Medium Blue
  ctaAlt: "#FFD700", // Gold
  ctaHover: "#1E40AF", // Darker Blue Hover
  
  // Borders & Dividers
  border: "#E5E7EB", // Light Grey Border
  borderDark: "#D1D5DB", // Medium Grey Border
  
  // Semantic Colors
  success: "#2ecc71", // Green for success
  warning: "#FFD700", // Gold for warnings
  error: "#E74C3C", // Red for errors
  info: "#4169E1", // Blue for info
};

// 3. Modern & Accessible Combination (Purple & Cyan)
// For future use - modern, approachable, tech-forward
export const MODERN_ACCESSIBLE = {
  // Primary Color: Medium Purple or Indigo
  primary: "#6A5ACD", // Medium Purple
  primaryDark: "#4B0082", // Indigo
  primaryLight: "#9370DB", // Light Purple
  primaryAccent: "#E9D5FF", // Soft Purple Background
  
  // Secondary Color: Bright Cyan or Light Blue
  secondary: "#00CED1", // Bright Cyan
  secondaryAlt: "#3498db", // Light Blue
  secondaryLight: "#5DADE2", // Light Cyan
  secondaryAccent: "#E0F7FA", // Soft Cyan Background
  
  // Neutral Colors (60% of design)
  neutral: "#FFFFFF", // Pure White
  neutralAlt: "#F8F9FA", // Off-White
  background: "#FFFFFF", // Pure White
  backgroundAlt: "#F8F9FA", // Off-White Background
  
  // Text Colors
  text: "#2B2B2B", // Dark Grey (high contrast)
  textMuted: "#6B7280", // Medium Grey
  textLight: "#9CA3AF", // Light Grey
  
  // Call-to-Action (10% of design)
  cta: "#32CD32", // Lime Green
  ctaAlt: "#00CED1", // Cyan
  ctaHover: "#28B463", // Darker Green Hover
  
  // Borders & Dividers
  border: "#E5E7EB", // Light Grey Border
  borderDark: "#D1D5DB", // Medium Grey Border
  
  // Semantic Colors
  success: "#32CD32", // Lime Green for success
  warning: "#FFD700", // Gold for warnings
  error: "#E74C3C", // Red for errors
  info: "#00CED1", // Cyan for info
};

// Legacy support - maintain backward compatibility
export const COLORS = {
  // Primary palette (keeping for backward compatibility)
  white: "#FFFFFF",
  lightGrey: "#D4D4D4",
  mediumGrey: "#B3B3B3",
  darkGrey: "#2B2B2B",
  
  // Semantic colors using the palette
  text: "#2B2B2B",
  textMuted: "#B3B3B3",
  background: "#FFFFFF",
  border: "#D4D4D4",
  borderDark: "#B3B3B3",
};

// Default export for convenience
export default {
  TRUSTWORTHY_GLOBAL,
  ACADEMIC_SOPHISTICATED,
  MODERN_ACCESSIBLE,
  COLORS, // Legacy support
};
