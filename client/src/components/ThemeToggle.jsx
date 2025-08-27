import React, { useState, useEffect } from 'react';
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark]);
}
