'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar() {
    return (
        <div className="w-auto h-auto rounded-l-full px-4 flex flex-row items-center justify-center gap-4 bg-gray-100/50 dark:gray-300/50">
            <Button className="" size='s' variant='ghost'>Home</Button>
            <Button className="" size='s' variant='ghost'>Learn</Button>
            <Button className="" size='s' variant='ghost'>Login</Button>
            <Button className="" size='s' variant='outline'>Signup</Button>
            <ToggleTheme />
        </div>
    )
}