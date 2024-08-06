import Header from './Header';
import Footer from './Footer';
import Food from './Food.jsx';
import Card from './Card';
import Student from './Student';
import UserGreeting from "./UserGreeting.jsx";

function App() {
    return (
        <>
            <div className="max-w-md m-auto">
                <Header />
                <UserGreeting isLoggedIn={true} username="Apvarga" />
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
