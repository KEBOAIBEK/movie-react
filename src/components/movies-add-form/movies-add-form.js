import "./movies-add-form.css";

const MoviesAddForm = () => {
    return (
        <div className="movies-add-form">
            <h1>Yangi kino qo'shish </h1>
            <form className="add-form  d-flex">
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Qanday kino"
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Nechi marotaba ko'rilgan"
                />
                <button type="submit" className="btn btn-outline-dark">
                    Qo'shish
                </button>
            </form>
        </div>
    );
};

export default MoviesAddForm;
