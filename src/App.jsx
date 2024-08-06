import Header from './Header';
import Footer from './Footer';
import Food from './Food.jsx';
import Card from './Card';
import Student from './Student';

function App() {
    return (
        <>
            <div className="max-w-md m-auto">
                <Header />
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
