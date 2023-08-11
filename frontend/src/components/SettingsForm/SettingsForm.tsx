// SettingsForm.tsx

import React, { useState } from 'react';
import { getTheme, setTheme } from '@/services/settings-service';

interface SettingsFormProps {
  onClose: () => void; // Prop to handle modal close
}

const SettingsForm: React.FC<SettingsFormProps> = ({ onClose }) => {
  const [theme, setThemeState] = useState(getTheme());

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setThemeState(newTheme);
    // You can add logic here to signal the UI to react upon the theme change
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Theme: {theme}
        <button onClick={handleThemeToggle}>Toggle</button>
      </label>
      
      {/* Close button */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SettingsForm;
