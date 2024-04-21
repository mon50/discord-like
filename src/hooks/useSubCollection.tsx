import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks';
import { DocumentData, Query, Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';


interface Messages {
    message:string;
    timestamp:Timestamp;
    user:{
        uid:string;
        photo:string;
        email:string;
        displayName:string;
    }
}

const useSubCollection = (CollectionName:string,subCollectionName:string) => {
    const [SubDocuments, setSubDocuments] = useState<Messages[]>([]);  
    const channelId = useAppSelector((state) => state.channel.channelId);

    useEffect(() => {

        let collectionRef = collection(db, CollectionName,String(channelId),subCollectionName);
        const collectionRefOrderBy = query(collectionRef, orderBy("timestamp","asc"));


        onSnapshot(collectionRefOrderBy, (snapshot) => { 
            let results:Messages[] = [];
            snapshot.docs.forEach((doc) => {
                results.push({
                    message: doc.data().message,
                    timestamp: doc.data().timestamp,
                    user: doc.data().user,
                })
            });
            setSubDocuments(results);
            //console.log(results);
        });
    },[channelId])

  return {SubDocuments};
};

export default useSubCollection;