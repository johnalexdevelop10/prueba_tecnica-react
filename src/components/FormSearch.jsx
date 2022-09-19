import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);//para recuperar los estados

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( 
        <div className="form-search">
            <h2>Old Movie Finder</h2>
            <form onSubmit={ handleSubmit }>
            {/* cada vez que se modifique el inpunt setea el estado del titulo */}
                <input type="text" placeholder="Title movie" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
            { error && <p className="error">The movie doesn't exist </p> }
        </div>
    );
}
 
export default FormSearch;