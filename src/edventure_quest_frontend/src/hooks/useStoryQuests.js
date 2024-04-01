import {
    doc,
    getDoc,
    collection,
    where,
    getDocs,
    query
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useStoryQuests = (storyId, userId) => {
    const [story, setStory] = useState({});
    const [storyQuests, setStoryQuests] = useState([]);
    const [prologue, setPrologue] = useState({})
    const [epilogue, setEpilogue] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;
        const storyQuestsArr = [];

        const getStoryQuests = async () => {
            setLoading(true);
            try {
                const storyRef = doc(db, "stories", storyId);
                const docSnap = await getDoc(storyRef);

                if (docSnap.exists() && userId && isMounted) {
                    setStory({
                        ...docSnap.data(),
                        storyId: docSnap.id,
                    });

                    const storyQuestRef = collection(db, "storyQuests");
                    const q = query(storyQuestRef, where("storyId", "==", storyId));

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        if (doc.data().chapter === 0) {
                            setPrologue({ storyQuestId: doc.id, ...doc.data() })
                        }else if(doc.data().chapter === -1){
                            setEpilogue({ storyQuestId: doc.id, ...doc.data() })
                        } else {
                            storyQuestsArr.push({ storyQuestId: doc.id, ...doc.data() });
                        }
                    });
                    storyQuestsArr.sort((a, b) => a.chapter - b.chapter)
                    setStoryQuests(storyQuestsArr)
                } else {
                    setError("No data found.")
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

        getStoryQuests();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [storyId, userId]);

    console.log(storyQuests)
    return {
        story: story,
        prologue: prologue,
        epilogue: epilogue,
        storyQuests: storyQuests,
        error: error,
        loading: loading,
    };
};
