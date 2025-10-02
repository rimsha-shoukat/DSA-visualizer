'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";
import { ChevronRightIcon } from "lucide-react"

export default function navbar() {
    return (
            
            <div className="w-auto h-auto shadow-sm rounded-l-full px-4 py-1 flex flex-row items-center justify-center gap-4 bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
                <Button variant="secondary" size="icon" className="size-8 hidden max-[580px]:block">
                    <ChevronRightIcon />
                </Button>
                <Button className="bg-transparent max-[580px]:hidden transition-all duration-300" size='sm' variant='ghost'>Home</Button>
                <Button className="bg-transparent max-[580px]:hidden transition-all duration-300" size='sm' variant='ghost'>Learn</Button>
                <Button className="bg-transparent max-[580px]:hidden transition-all duration-300" size='sm' variant='ghost'>Login</Button>
                <Button className="bg-transparent max-[580px]:hidden transition-all duration-300 shadow-md" size='sm' variant='outline'>Signup</Button>
                <Button className="bg-transparent max-[580px]:hidden transition-all duration-300" size='sm' variant='ghost'>Dashboard</Button>
                <ToggleTheme />
            </div>
    )
}