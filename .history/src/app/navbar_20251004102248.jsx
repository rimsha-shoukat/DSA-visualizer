'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";
import { ChevronRightIcon } from "lucide-react"
import { useState } from 'react';

export default function navbar() {
    const [viewNav, setViewNav] = useState(false);

    return (
        
        <div className="w-auto h-auto shadow-sm rounded-l-full px-2 py-1 flex flex-row items-center justify-center bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
            <Button onClick={ () => setViewNav(!viewNav) } variant="ghost" size="sm" className="bg-transparent hidden max-[580px]:block">
                <ChevronRightIcon />
            </Button>
            <div className={`transition-all duration-300 ${viewNav ? 'max-[580px]:flex' : 'max-[580px]:hidden' } flex flex-row items-center justify-center px-2 gap-4`}>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Home</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Learn</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Login</Button>
            <Button className="bg-transparent transition-all duration-300 shadow-md" size='sm' variant='outline'>Signup</Button>
            <Button className="bg-transparent transition-all duration-300 hidden" size='sm' variant='ghost'>Dashboard</Button>
            <ToggleTheme />
            </div>
        </div>
    )
}