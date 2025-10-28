'use client'
import { useRouter } from "next/navigation"
import React from "react"
const Title: React.FC = () => {
    const router = useRouter();
    const handleRouteToHome = () => {
        router.push('/');
    }
    return (
        <div className="title" onClick={handleRouteToHome}>
            Kris Fragata
        </div>
    )
}

export default Title