import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useBagItems = (purchasedItems) => {
    const [bagItems, setBagItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getBagItems = async () => {
            setLoading(true);
            try {
                const productsRef = collection(db, "items");
                const q = query(productsRef);

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted && purchasedItems.includes(doc.id)) {
                        setBagItems((prevItem) => [
                            ...prevItem,
                            { itemId: doc.id, ...doc.data() },
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

        getBagItems();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [purchasedItems]);

    return {
        bagItems: bagItems,
        error: error,
        loading: loading,
    };
};
