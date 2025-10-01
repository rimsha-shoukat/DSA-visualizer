'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar() {
    return (
        <div className="w-auto h-auto rounded-l-full px-4 py-1 flex flex-row items-center justify-center gap-4 bg-gray-400/50 dark:bg-gray-100/50">
            <Button className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-400" size='sm' variant='ghost'>Home</Button>
            <Button className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-400" size='sm' variant='ghost'>Learn</Button>
            <Button className="cursor-pointer" size='sm' variant='ghost'>Login</Button>
            <Button className="cursor-pointer" size='sm' variant='outline'>Signup</Button>
            <ToggleTheme />
        </div>
    )
}