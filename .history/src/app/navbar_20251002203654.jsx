'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";
import { ChevronRightIcon } from "lucide-react"
import { useState } from 'react';

export default function navbar() {
    const [viewNav, setViewNav] = useState(false);

    return (
            
        <div className="w-auto h-auto shadow-sm rounded-l-full px-4 py-1 flex flex-row items-center justify-center gap-4 bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
            <Button onClick={ () => setViewNav(!viewNav) } variant="secondary" size="icon" className="size-8 hidden max-[580px]:block">
                <ChevronRightIcon />
            </Button>
            <div className={`max-[580px]:absolute max-[580px]:top-16 max-[580px]:right-4 max-[580px]:flex max-[580px]:flex-col max-[580px]:items-end max-[580px]:justify-center max-[580px]:bg-[#d9d9d9]/90 dark:max-[580px]:bg-[#2a3b4d]/90 max-[580px]:backdrop-blur-sm max-[580px]:shadow-md max-[580px]:rounded-lg max-[580px]:p-4 transition-all duration-300 ${viewNav ? 'max-[580px]:flex' : 'max-[580px]:hidden' } flex flex-row items-center justify-center gap-4`}>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Home</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Learn</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Login</Button>
            <Button className="bg-transparent transition-all duration-300 shadow-md" size='sm' variant='outline'>Signup</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Dashboard</Button>
            <ToggleTheme />
            </div>
        </div>
    )
}