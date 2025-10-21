'use client';
import { Button } from '@/components/ui/button';
import ToggleTheme from "./theme-toggle";
import Login from './user/login';
import Signup from './user/signup';
import TopicsList from './learn/topics-list';
import Dashboard from './user/dashboard';
import { useState } from 'react';
import Link from 'next/link';

export default function navbar() {
    const[log, setLog] = useState(false);
    const[sign, setSign] = useState(false);
    const[list, setList] = useState(false);
    const[board, setBoard] = useState(false);

    return (
        <div className="w-auto h-auto text-[1.2rem] shadow-md rounded-l-full px-3 max-[390px]:gap-0 gap-4 flex flex-row items-center justify-center bg-[#d9d9d9]/50 dark:bg-[#2a3b4d]/50">
            <Link href="/">
            <Button className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Home</Button>
            </Link>
            <Button onClick={()=> setList(!list) } className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Learn</Button>
            <Button onClick={()=> setLog(!log)} className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Login</Button>
            <Button onClick={()=> setBoard(!board)} className="bg-transparent transition-all duration-300" size='sm' variant='ghost'>Dashboard</Button>

            {
                log && <Login setLog={setLog} setSign={setSign} setBoard={setBoard} />
            }
            {
                sign && <Signup setLog={setLog} setSign={setSign} />
            }
            {
                list && <TopicsList setList={setList} />
            }
            {
                board && <Dashboard setBoard={setBoard} />
            }
            <ToggleTheme />
        </div>
    )
}


