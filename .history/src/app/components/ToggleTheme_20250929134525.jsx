'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ToggleTheme(){
    const[theme, setTheme] = useTheme();
    return(
        <Button size='icon' className="w-[10] h-[10] transition-transform duration-300" variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <>FaSun</>
        </Button>
    )
}