'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button size='icon' className="rounded-full" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FaSun/>
            <FaMoon/>
        </Button>
    )
}