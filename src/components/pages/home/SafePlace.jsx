import { Link } from "react-router-dom";

const mockData = [
    {
        name: "deneme",
        url: "123",
        quote: "",
        from: ""
    }
];

const SafePlace = () => {

    const mapDataList = mockData.map((data, index) =>
        <li key={index}>
            <div className="card w-75 m-auto">
                <div className="card-body">
                    <Link to={`/safe/${data.url}`}>{data.name}</Link>
                </div>
            </div>
        </li>
    );

    return (
        <div className="col-12">
            <div className="row col-12 m-0">
                Navigation Test
            </div>
            <div className="row col-12">
                <ul>
                    {mapDataList}
                </ul>
            </div>
        </div>
    );
}

export default SafePlace;