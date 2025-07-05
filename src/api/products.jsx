import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Adjust the import path as necessary

export const fetchProducts = async () => {
  try {
    const productsCol = collection(db, "products");
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productList;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
