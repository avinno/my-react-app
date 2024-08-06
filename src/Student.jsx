function Student (props) {
    return(
        <div className="p-4 border border-gray-500">
            <p><span className="font-bold">Name:</span> {props.firstName} {props.lastName}</p>
            <p><span className="font-bold">Age:</span> {props.age}</p>
            <p><span className="font-bold">Student:</span> {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student