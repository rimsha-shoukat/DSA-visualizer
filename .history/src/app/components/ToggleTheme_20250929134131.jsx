'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button class="w-[10] h-[10] transi" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
    )
}