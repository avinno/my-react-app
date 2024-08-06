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

    return (
        <>
            <div className="max-w-md m-auto">
                <Header />
                <UserGreeting isLoggedIn={true} username="Apvarga" />
                <List items={fruits} category="Fruits" />
                <Student firstName="Aaron" lastName="Varga" age={34} isStudent={true} />
                <Student firstName="John" lastName="Doe" age={24} isStudent={false} />
                <Student />
                <Card />
                <Food />
                <Footer />
            </div>
        </>
    );
}

export default App
