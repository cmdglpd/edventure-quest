import { collection, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useCompanions = () => {
    const [companions, setCompanions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getCompanions = async () => {
            setLoading(true);
            try {
                const companionsRef = collection(db, "companions");
                const q = query(companionsRef);

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted) {
                        setCompanions((prevCompanion) => [
                            ...prevCompanion,
                            { companionId: doc.id, ...doc.data() },
                        ]);
                    }
                });
            } catch (error) {
                if (isMounted) {
                    console.log(error);
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        getCompanions();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    return {
        companions: companions,
        error: error,
        loading: loading,
    };
};
