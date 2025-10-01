'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar() {
    return (
        <div className="w-auto h-auto rounded-l-full px-4 flex flex-row items-center justify-center gap-4 bg-gray-200/50 dark:gray-200/50">
            <Button className="cursor-pointer" size='sm' variant='ghost'>Home</Button>
            <Button className="cursor-pointer" size='sm' variant='ghost'>Learn</Button>
            <Button className="cursor-pointer" size='sm' variant='ghost'>Login</Button>
            <Button className="cursor-pointer" size='sm' variant='outline'>Signup</Button>
            <ToggleTheme />
        </div>
    )
}