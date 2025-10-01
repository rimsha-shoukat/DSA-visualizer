'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar() {
    return (
        <div className="w-[100%] h-auto rounded-l-full flex flex-row items-center justify-center gap-4 bg-gray-100/50 dark:gray-300/50">
            <Button size='icon' variant='outline'>Home</Button>
            <Button size='icon' variant='outline'>Learn</Button>
            <Button size='icon' variant='outline'>Login</Button>
            <Button size='icon' variant='outline'>Signup</Button>
            <ToggleTheme />
        </div>
    )
}