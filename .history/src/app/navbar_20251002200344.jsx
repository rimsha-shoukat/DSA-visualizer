'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar() {
    return (
        <div className="w-auto h-auto">
            <Button variant="secondary" size="icon" className="size-8">
             <ChevronRightIcon />
            </Button>
            <div className="w-auto h-auto max-[580px]:hidden shadow-sm rounded-l-full px-4 py-1 flex flex-row items-center justify-center gap-4 bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
                <Button className="bg-transparent" size='sm' variant='ghost'>Home</Button>
                <Button className="bg-transparent" size='sm' variant='ghost'>Learn</Button>
                <Button className="bg-transparent" size='sm' variant='ghost'>Login</Button>
                <Button className="bg-transparent shadow-md" size='sm' variant='outline'>Signup</Button>
                <Button className="hidden bg-transparent" size='sm' variant='ghost'>Dashboard</Button>
                <ToggleTheme />
            </div>
        </div>
    )
}