import Header from './Header';
import Footer from './Footer';
import Food from './Food.jsx';
import Card from './Card';

function App() {
    return (
        <>
            <div className="max-w-md m-auto">
                <Header />
                <Card />
                <Food />
                <Footer />
            </div>
        </>
    );
}

export default App
