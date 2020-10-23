import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AppContext from '../../store/AppContext'
import AnimatedRoute from './AnimatedRoute';

export default function GuestRoute({children,...rest}) {
    const [isLoggedIn] = useContext(AppContext);
    if(!isLoggedIn) return(
        <AnimatedRoute {...rest}>
                {children}
        </AnimatedRoute>
    )
         
                
    
    return <Redirect to ="/" />; 

}