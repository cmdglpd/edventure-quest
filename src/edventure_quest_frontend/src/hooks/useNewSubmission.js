import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useNewSubmission = async (data) => {
  let success = {};
  if (data) {
    try {
      // Add a new document in the submissions collection with a generated id.
      const submission = await addDoc(collection(db, "submissions"), {
        date: "",
        fileURL: data.fileURL,
        fileName: data.fileName,
        questType: data.questType,
        questId: data.questId,
        userId: data.userId,
        username: data.username
      });
      success = {
        submissionId: submission.id,
        success: true,
        message: "File has been submitted successfully.",
      };
    } catch (error) {
      success = {
        submissionId: null,
        success: false,
        message: "An error occured, please try again.",
      };
    }
  }

  return success;
};
