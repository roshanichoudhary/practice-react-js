

const ShoppingList = () => {

    const product = [
        { title: 'cabbage', id: 1},
        { title: 'Garlic', id: 1},
        { title: 'Papaya', id: 1}
    ];

    const listitem = product.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    )
    return(
        <ul>{listitem}</ul>
    );

}

export default ShoppingList;