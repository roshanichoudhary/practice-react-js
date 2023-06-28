import React from 'react';

const ShoppingList = () => {

    const product = [
        { title: 'cabbage', isFruit: false, id: 1},
        { title: 'Garlic', isFruit: false, id: 1},
        { title: 'Papaya', isFruit: true, id: 1}
    ];

    const listitem = product.map(product =>
        <li key={product.id} style={{color: product.isFruit ? 'red' : 'black'}}>
            {product.title}
        </li>
    )
    return(
        <ul  style={{borderTop: '1px solid #000'}} >{listitem}</ul>
    );

}

export default ShoppingList;