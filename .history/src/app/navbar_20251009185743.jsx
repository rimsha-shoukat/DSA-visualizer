'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";
import Login from './user/login';
import Signup from './user/signup';
import TopicsList from './learn/topics-list';
import { useState } from 'react';

export default function navbar() {
    const[log, setLog] = useState(false);
    const[sign, setSign] = useState(false);

    return (
        <div className="w-auto h-auto shadow-md rounded-l-full px-3 max-[390px]:gap-0 gap-4 flex flex-row items-center justify-center bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Home</Button>
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Learn</Button>
            <Button onClick={()=> setLog(!log)} className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Login</Button>
            {
                log && <Login setLog={setLog} setSign={setSign} />
            }
            {
                sign && <Signup setLog={setLog} setSign={setSign} />
            }
            {
                topic && <TopicsList setLog={setLog} setSign={setSign} />
            }
            <Button className="bg-transparent transition-all duration-300 hidden" size='sm' variant='ghost'>Dashboard</Button>
            <ToggleTheme />
        </div>
    )
}