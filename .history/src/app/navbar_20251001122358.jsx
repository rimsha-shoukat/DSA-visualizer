'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";

export default function navbar(){
    return(
        <div className="w-[100%] h-auto flex flex-row items-center justify-center gap-4 bg-w">
            <Button>Home</Button>
            <Button>Learn</Button>
            <Button>Login</Button>
            <Button>Signup</Button>
            <ToggleTheme />
        </div>
    )
}