'use client';
import { getCollection } from '@/lib/db.js';
import validator from 'validator';

const users = [
        {
         'name' : 'rk',
         'email' : 'rk@gmail.com',
         'pass' : 'pass'
        }
    ];

export default async function SignAuth({name, email, pass, setEmailError, setUserError, setPassError, setLog, setSign}){
    const usersCollection = await getCollection('users');
    console.log(usersCollection);
    let validEmail = validator.isEmail(email);
    let validPass = pass.length >= 8;
    let validUser = await usersCollection.findOne({email});
    if(!validEmail) setEmailError('Please enter a valid email address');
    if(!validPass) setPassError('Password must be atleast 8 characters long');
    if(!validUser) setUserError("user already exist");
    
    if(validEmail && validPass && validUser){
        await usersCollection.insertOne({name, email, pass});
        console.log('new user added');
        setName('');
        setEmail('');
        setPass('');
        setSign(false);
        setLog(true);
        setUserError('');
        setEmailError('');
    }
}

export default async function LogAuth({email, pass, setEmailError, setPassError, setUserError, setLog, setSign}){
    const usersCollection = await getCollection('users');
    console.log(usersCollection);
    let validEmail = validator.isEmail(email);
    let validUser = usersCollect.find(user => user.email === email);
    let validPass = validUser.pass === pass;
    if(!validEmail) setEmailError('Please enter a valid email address');
    if(!validUser) setUserError('User does not exist');
    if(!validPass) setPassError('Incorrect password');
    if(validEmail && validUser && validPass){
        console.log('user logged in successfully');
        setLog(false);
        setSign(false);
        setEmail('');
        setPass('');
        setEmailError('');
        setPassError('');
        setUserError('');
    }
}
