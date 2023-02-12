import { Link } from "react-router-dom";
import navbarIcon from '../../../assets/icons/navbar_icon.png';

const mockData = [
    {
        name: "bob ross telling stories for 1 full hour",
        url: "dLEH8oyhbek",
        quote: "we don’t make mistakes. we just have happy accidents.",
        from: "Bob Ross"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
    {
        name: "you're inside ghibli movie to relax and find peace",
        url: "jEN99YaOLp8",
        quote: "i love ponyo whether she's a fish, a human, or something in between.",
        from: "'Ponyo,' 2008"
    },
];

const SafePlace = () => {

    const mapDataList = mockData.map((data, index) =>
        <li key={index}>
            <div className="card w-50 m-auto p-0 mb-3">
                <div className="row no-gutters">
                    <div className="col-2 m-auto">
                        <img src={navbarIcon} className="card-img" alt="Loading..." style={{ width: '100px' }} />
                    </div>
                    <div className="col-10">
                        <div className="card-body text-start">
                            <h5 className="card-title">
                                <Link className="link" to={`/safe/${data.url}`}>{data.name}</Link>
                            </h5>
                            <p className="card-text">{data.quote}</p>
                            <p className="card-text"><small className="text-muted">{data.from}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );

    return (
        <div className="col-12 h-100" style={{overflow: 'auto'}}>
            <div className="row col-12 m-0 mt-2">
                <p className="headline">
                    the beauty of a slower paced life
                </p>
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