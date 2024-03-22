import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useNavigateIf(url, shouldNavigate) {
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldNavigate) {
            navigate(url);
        }
    }, [url, shouldNavigate, navigate]);

}