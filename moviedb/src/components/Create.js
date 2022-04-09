import { useNavigate } from "react-router";
import * as movieService from '../services/MovieService';

const CreateMovie = () => {
    let navigate = useNavigate();

    const onCreate = (e) => {

        let formData = new FormData(e.target);

        let title = formData.get('title').trim();
        let description = formData.get('description').trim();
        let image = formData.get('image').trim();

        movieService.createMovie({
            title,
            description,
            image
        });

        navigate('/');
    }

    return (

        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Add new movie</h3>
                    <form className="requires-validation" onSubmit={onCreate}>
                        <input className="form-control" type="text" name="title" placeholder="Title" required />
                        <div className="invalid-feedback">
                            Title is required!
                        </div>
                        <input className="form-control" type="text" name="description" placeholder="Description" required />
                        <div className="invalid-feedback">
                            Description is required!
                        </div>
                        <input className="form-control" type="text" name="image" placeholder="Image link" required />
                        <div className="invalid-feedback">
                            Image link is required!
                        </div>
                        <button id="submit" type="submit" className="button">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMovie;