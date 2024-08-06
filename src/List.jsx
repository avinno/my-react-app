function List() {
    const fruits = [{id: 1, name: "apple", calories: 95},
                                               {id: 2, name: "orange", calories: 45},
                                               {id: 3, name: "banana", calories: 105},
                                               {id: 4, name: "pineapple", calories: 150}];

    // fruits.sort((a, b) => a.name.localCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric Order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numberic or Descending

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories} cal</li>);

    return(<ul>{listItems}</ul>);
}

export default List;