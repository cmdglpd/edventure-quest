import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../config/firebase";

export const useSubmissionStatus = async (submissionId, userId, questId, status) => {
    try {
        const submissionRef = doc(db, "submissions", submissionId);
        const userRef = doc(db, "users", userId)

        switch (status?.toLowerCase()) {
            case "accepted":
                await updateDoc(submissionRef, {
                    status: "Accepted",
                });
                await updateDoc(userRef, {
                    completedQuests: arrayUnion(questId),
                });
                break;

            case "rejected":
                await updateDoc(submissionRef, {
                    status: "Rejected",
                });
                await updateDoc(userRef, {
                    completedQuests: arrayRemove(questId),
                });
                break;

            default:
                break;
        }

        return { error: null };
    } catch (error) {
        console.log(error);
        return { error: error };
    }
};