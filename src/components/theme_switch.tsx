"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { HugeiconsIcon } from '@hugeicons/react';
import { SunIcon, MoonIcon } from '@hugeicons/core-free-icons';

export function ThemeSwitch() {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

      isIconOnly
    >
      <HugeiconsIcon
        icon={theme === "dark" ? MoonIcon : SunIcon}
      />
    </Button>
  );
}