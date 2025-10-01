'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar(){
    return(
        <div className="w-[100%] h-auto flex flex-row items-center justify-center gap-4 bg-gray-100/50 dark:gray-300/50">
            <Button size='icon' >Home</Button>
            <Button size='icon' >Learn</Button>
            <Button size='icon' >Login</Button>
            <Button size='icon' >Signup</Button>
            <ToggleTheme />
        </div>
    )
}