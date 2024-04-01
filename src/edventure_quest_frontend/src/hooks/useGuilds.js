import { collection, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGuilds = (grandCouncilId) => {
    const [guilds, setGuilds] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getGuilds = async () => {
            setLoading(true);
            try {
                const guildsRef = collection(db, "guilds");
                const q = query(
                    guildsRef,
                    where("grandCouncilId", "==", grandCouncilId)
                );

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted) {
                        setGuilds((prevGuild) => [
                            ...prevGuild,
                            { guildId: doc.id, ...doc.data() },
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

        getGuilds();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [grandCouncilId]);

    return {
        guilds: guilds,
        error: error,
        loading: loading,
    };
};
