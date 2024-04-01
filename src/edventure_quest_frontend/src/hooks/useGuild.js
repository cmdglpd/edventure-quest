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
  
  export const useGuild = (guildId) => {
    const [guild, setGuild] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      let isMounted = true;
  
      const getGuild = async () => {
        setLoading(true);
        try {
          const guildRef = doc(db, "guilds", guildId);
          const docSnap = await getDoc(guildRef);
  
          if (docSnap.exists() && isMounted) {
            setGuild({
              ...docSnap.data(),
              guildId: docSnap.id
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
  
      getGuild();
  
      // Cleanup function to set isMounted to false when the component unmounts
      return () => {
        isMounted = false;
      };
    }, [guildId]);
  
    return {
      guild: guild,
      error: error,
      loading: loading,
    };
  };
  