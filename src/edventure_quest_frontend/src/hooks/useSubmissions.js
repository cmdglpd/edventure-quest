import { collection, orderBy, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useSubmissions = (questId) => {
    const [submissions, setSubmissions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const getSubmissions = async () => {
            setLoading(true);
            try {
                const submissionRef = collection(db, "submissions");
                const q = query(
                    submissionRef,
                    where("questId", "==", questId),
                );

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted) {
                        setSubmissions((prevSubmission) => [
                            ...prevSubmission,
                            { submissionId: doc.id, ...doc.data() },
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

        getSubmissions();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [questId]);

    return {
        submissions: submissions,
        error: error,
        loading: loading,
    };
};
