import React, { useState, useEffect } from 'react';
export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); }, [darkMode]);
}
