import profilePic from './assets/avatar.jpg';

function Card () {
    return(
        <div className="bg-gray-100 border-gray-300 border rounded my-8 flex flex-col justify-center items-center">
            <img src={profilePic} alt="Profile picture" className="mt-4 rounded border-gray-300 border"/>
            <h2 className="font-bold text-lg p-4 pb-2 text-gray-700">AV Web Design & Development</h2>
            <p className="p-4 pt-0 text-gray-900">Professional web design and development solutions.</p>
        </div>
    );
}

export default Card