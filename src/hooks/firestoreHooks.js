import {useEffect, useState} from "react";

export function useCollectionData(collection, referenceField) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = collection.onSnapshot((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());

            if (referenceField) {
                const docsPromises = docs.map((doc) => {
                    const isArrayField = Array.isArray(doc[referenceField]);
                    return isArrayField
                        ? getArrayReferenceField(doc, referenceField)
                        : getReferenceField(doc, referenceField)
                })

                Promise.all(docsPromises).then(data => {
                    docs.forEach((d, i) => {
                        d[referenceField] = data[i]
                    });
                    setData(docs);
                })
            } else {
                setData(docs);
            }
        })

        return unsubscribe;
    }, []);



    return [data];
}

export function useDocData(doc, referenceField) {
    const [data, setData] = useState();

    useEffect(() => {
        const unsubscribe = doc.onSnapshot((snapshot) => {
            const docData = snapshot.data();

            if (referenceField) {
                const isArrayField = Array.isArray(docData[referenceField]);
                const fieldPromise = isArrayField
                    ? getArrayReferenceField(docData, referenceField)
                    : getReferenceField(docData, referenceField);
                fieldPromise.then((d) => {
                    docData[referenceField] = d;
                    setData(docData)
                })
            } else {
                setData(docData)
            }
        })

        return unsubscribe;
    }, []);



    return [data];
}

export function getArrayReferenceField(doc, fieldName) {
    return Promise.all(doc[fieldName].map((field) => {
        return field.get().then((fieldDoc) => fieldDoc.data())
    }))
}

export function getReferenceField(doc, fieldName) {
    return doc[fieldName].get().then((fieldDoc) => fieldDoc.data())
}
