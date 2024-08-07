import PropTypes from 'prop-types';

function List(props) {
    // fruits.sort((a, b) => a.name.localCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric Order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric or Descending

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name[0].toUpperCase() + item.name.slice(1)}: &nbsp; <span className="italic text-gray-500">{item.calories} cal</span></li>);

    return(<div className="my-4"><h3 className="font-bold text-lg">{category}</h3><ul>{listItems}</ul></div>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List;