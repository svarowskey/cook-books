import { db } from './firebase';
import firebase from "firebase";

export function getProducts() {
    return db.collection('products')
        .orderBy('name')
        .get()
        .then(snapshot => {
            const products = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ));
            return products;
        })
        .catch(error => {
            console.log('Error getting products: ', error);
        });
}

export function getProductById(productId) {
    return db.collection('products')
        .doc(productId)
        .get()
        .then((docref) => {
            return docref.data();
        })
        .catch(error => console.log('Error getting a product by Id: ', error));
}

export function getProducstByIds(productsIds) {
    return db.collection('products')
        .doc(productsIds)
        .get()
        .then((docref) => {
            return docref.data();
        })
        .catch(error => console.log('Error getting a product by Id: ', error));
}

export function getDishes() {
    return db.collection('dishes')
        .orderBy('name')
        .get()
        .then(snapshot => {
            const dishes = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ));

            return dishes;
        })
        .catch(error => {
            console.log('Error getting dishes: ', error);
        })
}

export function getDishById(dishId) {
    return db.collection('dishes')
        .doc(dishId)
        .get()
        .then((docref) => {
            return docref.data();
        })
        .catch(error => {
            console.log('Error getting dish by Id: ', error);
        })
}

export function createProduct(data) {
    return db.collection('products').add({
        ...data,
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
                ...doc.data()
        }));
}

export function createDish(data) {
    let dishesProds = data.products_list.map((prod) => {
        return firebase.firestore().doc('/products/' + prod.id);
    })
    return db.collection('dishes').add({
        ...data,
        products_list: dishesProds,
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

/**
 * ?????????????? ???????????????? ?????????? ?? Firebase Storage
 * @param file
 * @returns {Promise<String>} File's URL
 */
export function uploadFile(file) {
    return firebase.storage().ref().child('images/' + file.name).put(file)
        .then((snapshot) => snapshot.ref.getDownloadURL());
}
