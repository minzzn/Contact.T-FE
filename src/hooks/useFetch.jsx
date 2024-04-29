import { useEffect, useState } from "react"

export default function useFetch({ methodType, url, options }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(`http://${serverEndPoint}/${url}`, options);

            if(!response.ok) {
                throw new Error("Network Error(not 202)");
            }

            const resultData = await response.json();
            setData(resultData);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return [data, loading, error];
}