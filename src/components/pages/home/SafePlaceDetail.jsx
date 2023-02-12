import { useNavigate, useParams } from "react-router-dom";
import YouTube from 'react-youtube';

const SafePlaceDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className="h-100">
            <div className="mt-2">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => { navigate("..", { relative: 'path' }); }}>
                    Back
                </button>
            </div>
            <div className="youtube-frame">
                <YouTube
                    videoId={params.id}
                    opts={{
                        height: '685',
                        width: '1200',
                    }}
                />
            </div>
        </div>
    );
}

export default SafePlaceDetail;