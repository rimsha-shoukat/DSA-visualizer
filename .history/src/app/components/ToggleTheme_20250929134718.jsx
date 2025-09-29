'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button size='icon' className="rounded-full" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-"/>
            <FaMoon/>
        </Button>
    )
}