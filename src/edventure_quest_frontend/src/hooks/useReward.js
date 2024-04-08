import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../config/firebase";

export const useReward = async (userId, guildId, updatedSubmissionStatus, submissionStatus, currentPoints, rewardPoints) => {
    try {
        const userRef = doc(db, "users", userId)
        const guildRef = doc(db, "guilds", guildId)

        switch (submissionStatus.toLowerCase()) {
            case "pending":
                if (updatedSubmissionStatus.toLowerCase() === "accepted") {
                    await updateDoc(userRef, {
                        edventurePoints: parseInt(currentPoints.edventurePoints) + parseInt(rewardPoints.edventurePoints),
                        expPoints: parseInt(currentPoints.expPoints) + parseInt(rewardPoints.expPoints),
                    });
                }
                break;

            case "accepted":
                if (updatedSubmissionStatus.toLowerCase() === "rejected") {
                    await updateDoc(userRef, {
                        edventurePoints: parseInt(currentPoints.edventurePoints) - parseInt(rewardPoints.edventurePoints),
                        expPoints: parseInt(currentPoints.expPoints) - parseInt(rewardPoints.expPoints),
                    });
                }
                break;

            case "rejected":
                if (updatedSubmissionStatus.toLowerCase() === "accepted") {
                    await updateDoc(userRef, {
                        edventurePoints: parseInt(currentPoints.edventurePoints) + parseInt(rewardPoints.edventurePoints),
                        expPoints: parseInt(currentPoints.expPoints) + parseInt(rewardPoints.expPoints),
                    });
                }
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