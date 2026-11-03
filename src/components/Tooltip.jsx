import { cloneElement, useId } from 'react';
import { useTheme } from '../context/ThemeContext';

// Styled tooltip shown above its child on hover and keyboard focus
export const Tooltip = ({ content, children }) => {
  const { theme } = useTheme();
  const tooltipId = useId();
  const isDark = theme === 'dark';

  return (
    <span className="group/tooltip relative inline-flex">
      {cloneElement(children, { 'aria-describedby': tooltipId })}
      <span
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none invisible absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2 translate-y-1 rounded-xl border px-4 py-3 text-left text-xs leading-relaxed opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 sm:w-64 ${
          isDark
            ? 'border-primary-500/30 bg-gray-800/95 text-gray-200 shadow-purple-900/30'
            : 'border-primary-200 bg-white/95 text-gray-700 shadow-primary-900/20'
        }`}
      >
        <span className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600"></span>
        {content}
        <span
          className={`absolute left-1/2 top-full -mt-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r ${
            isDark ? 'border-primary-500/30 bg-gray-800' : 'border-primary-200 bg-white'
          }`}
        ></span>
      </span>
    </span>
  );
};
