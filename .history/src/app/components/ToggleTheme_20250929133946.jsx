'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {Sun}

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '${<Sun/>}' : '☀️'}
        </Button>
    )
}