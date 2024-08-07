function Header() {
    return(
        <header className="my-4 border-b border-gray-200 pb-2">
            <h1 className="text-2xl font-bold mb-2">🤠 My Website</h1>
            <nav>
                <ul className="flex flex-row text-blue-500">
                    <li><a href="" className="p-4  text-blue-600">Home</a></li>
                    <li><a href="" className="p-4 text-blue-600">About</a></li>
                    <li><a href="" className="p-4 text-blue-600">Services</a></li>
                    <li><a href="" className="p-4 text-blue-600">Contact</a></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header