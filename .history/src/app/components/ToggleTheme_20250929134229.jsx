'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button className="w-[10] h-[10] transition-transform du" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
    )
}