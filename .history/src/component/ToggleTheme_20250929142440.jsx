'use client';
import * as React from "react"
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ToggleTheme() {
    const [theme, setTheme] = useTheme();

    return (
        <Button size='icon' className="rounded-full" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>
            <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100"/>
        </Button>
    )
}