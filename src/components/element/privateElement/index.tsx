"use client"
import React from 'react'
import { useAppSelector } from '../../../redux/hook';
import { Navigate } from 'react-router-dom';

const PrivateElement = ({ children }: { children: React.ReactNode }) => {
    const auth = useAppSelector(state => state.auth.auth);
    if (!auth) {
        return <Navigate to="/" replace />;
    }
    return (
        <>{children}</>
    )
}

export default PrivateElement