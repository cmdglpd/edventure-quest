import {
    doc,
    getDoc,
    collection,
    where,
    getDocs,
    query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useStoryQuest = (storyQuestId) => {
    const [storyQuest, setStoryQuest] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getStoryQuest = async () => {
            setLoading(true);
            try {
                const storyQuestRef = doc(db, "storyQuests", storyQuestId);
                const docSnap = await getDoc(storyQuestRef);

                if (docSnap.exists() && isMounted) {
                    setStoryQuest({
                        ...docSnap.data(),
                        storyQuestId: docSnap.id,
                        questType: "story quest"
                    });

                } else {
                    setError("No community found.")
                }
            } catch (error) {
                if (isMounted) {
                    console.log(error);
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        getStoryQuest();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [storyQuestId]);

    return {
        storyQuest: storyQuest,
        error: error,
        loading: loading,
    };
};
