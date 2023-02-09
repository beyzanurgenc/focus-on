import { useParams } from "react-router-dom";

const SafePlaceDetail = () => {
    const params = useParams();

    return (
        <div>
            Safe place detail. {params.id}
        </div>
    );
}

export default SafePlaceDetail;