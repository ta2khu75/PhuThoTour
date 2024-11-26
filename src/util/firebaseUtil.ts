import { addDoc, collection, deleteDoc, doc, getCountFromServer, getDoc, getDocs, query, QueryConstraint, updateDoc } from "firebase/firestore";
import { getDownloadURL, StorageReference, uploadBytes } from "firebase/storage";
import { TypeEnum } from "../types/TypeEnum";
import { db } from "../config/FirebaseConfig";

export default class FirebaseUtil {
    static async create<T extends object>(typeEnum: TypeEnum, data: T): Promise<T> {
        try {
            const collectionRef = collection(db, typeEnum);
            const docRef = await addDoc(collectionRef, data)
            const docSnap = await getDoc(doc(collectionRef, docRef.id))
            return { ...docSnap.data(), id: docSnap.id } as T & { id: string };
        } catch (err) {
            console.log(`Create ${typeEnum}`, err);
            throw err
        }
    }
    static async uploadFile(storageRef: StorageReference, file: File) {
        try {
            await uploadBytes(storageRef, file)
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    static async update<T extends object>(typeEnum: TypeEnum, id: string, data: T): Promise<void> {
        const collectionRef = collection(db, typeEnum)
        const docRef = doc(collectionRef, id);
        try {
            await updateDoc(docRef, { ...data })
        } catch (error) {
            console.log(`Update ${typeEnum}`, error);
            throw error
        }
    }
    static async deleteById(typeEnum: TypeEnum, id: string): Promise<void> {
        const collectionRef = collection(db, typeEnum)
        const docRef = doc(collectionRef, id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            console.log(`Delete by id ${typeEnum}`, error);
            throw error;
        }
    }
    static async queryData<T>(typeEnum: TypeEnum, ...queryConstraints: QueryConstraint[]): Promise<T[]> {
        const collectionRef = collection(db, typeEnum);
        try {
            const data = await getDocs(query(collectionRef, ...queryConstraints));
            return data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id } as T & { id: string })) ?? [];
        } catch (error) {
            console.log(`Query ${typeEnum}`, error);
            throw error;
        }
    }
    static async count(typeEnum: TypeEnum): Promise<number> {
        const collectionRef = collection(db, typeEnum);
        try {
            const snapshot = await getCountFromServer(collectionRef);
            return snapshot.data().count;
        } catch (error) {
            console.log(`Count ${typeEnum}`, error);
            throw error;

        }
    }
    static async readAll<T extends object>(typeEnum: TypeEnum): Promise<T[]> {
        const collectionRef = collection(db, typeEnum)
        try {
            const data = await getDocs(collectionRef);
            return data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id } as T & { id: string })) ?? [];
        } catch (error) {
            console.log(`Read all ${typeEnum}`, error);
            throw error;
        }
    }
    static async readById<T extends object>(typeEnum: TypeEnum, id: string): Promise<T | undefined> {
        const collectionRef = collection(db, typeEnum);
        try {
            const docRef = doc(collectionRef, id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { ...docSnap.data(), id: docSnap.id } as T & { id: string };
            } else {
                return undefined;
            }
        } catch (error) {
            console.log(`Read by id ${typeEnum}`, error);
            throw error;
        }
    }
}