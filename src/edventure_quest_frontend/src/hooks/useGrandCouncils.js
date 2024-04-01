import { collection, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGrandCouncils = () => {
    const [grandCouncils, setGrandCouncils] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getGrandCouncils = async () => {
            setLoading(true);
            try {
                const grandCouncilsRef = collection(db, "grandCouncils");
                const q = query(grandCouncilsRef);

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted) {
                        setGrandCouncils((prevGrandCouncil) => [
                            ...prevGrandCouncil,
                            { grandCouncilId: doc.id, ...doc.data() },
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

        getGrandCouncils();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    return {
        grandCouncils: grandCouncils,
        error: error,
        loading: loading,
    };
};
