import { collection, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        const getProducts = async () => {
            setLoading(true);
            try {
                const productsRef = collection(db, "items");
                const q = query(
                    productsRef,
                    where("type", "==", "product")
                );

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (isMounted) {
                        setProducts((prevProduct) => [
                            ...prevProduct,
                            { productId: doc.id, ...doc.data() },
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

        getProducts();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    return {
        products: products,
        error: error,
        loading: loading,
    };
};
