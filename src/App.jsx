import Header from './Header';
import Footer from './Footer';
import Food from './Food.jsx';
import Card from './Card';
import Student from './Student';
import UserGreeting from "./UserGreeting.jsx";
import List from './List';

function App() {
    const fruits = [{id: 1, name: "apple", calories: 95},
        {id: 2, name: "orange", calories: 45},
        {id: 3, name: "banana", calories: 105},
        {id: 4, name: "pineapple", calories: 150}];

    const vegetables = [{id: 6, name: "corn", calories: 63},
        {id: 7, name: "potatoes", calories: 110},
        {id: 8, name: "celery", calories: 15},
        {id: 9, name: "carrots", calories: 25}];

    return (
        <>
            <div className="max-w-md m-auto">
                <Header />
                <UserGreeting isLoggedIn={true} username="Apvarga" />
                {fruits.length > 0 && <List items={fruits} category="Fruits" />}
                {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
                <div className="flex flex-col gap-2">
                    <Student firstName="Aaron" lastName="Varga" age={34} isStudent={true} />
                    <Student firstName="John" lastName="Doe" age={24} isStudent={false} />
                    <Student />
                </div>
                <Card />
                <Food />
                <Footer />
            </div>
        </>
    );
}

export default App;
