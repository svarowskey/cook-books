import { db } from './firebase';

export function getProducts() {
    return db.collection('products')
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

export function getDishes() {
    return db.collection('dishes')
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
            console.log('Errpr getting dishes: ', error);
        })
}
