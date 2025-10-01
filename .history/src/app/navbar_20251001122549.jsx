'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar(){
    return(
        <div className="w-[100%] h-auto flex flex-row items-center justify-center gap-4 bg-gray-100/50 dark:gray-300/50">
            <Button size='icon' varient='outli'>Home</Button>
            <Button size='icon' varient='outli'>Learn</Button>
            <Button size='icon' varient='outli'>Login</Button>
            <Button size='icon' varient='outli'>Signup</Button>
            <ToggleTheme />
        </div>
    )
}