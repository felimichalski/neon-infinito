import { useNavigate, useLocation } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate();
    const { search } = useLocation();

    const query = new URLSearchParams(search)

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <div>{query.get('id')}</div>
            <button onClick={handleClick}>Go back to home page</button>
        </>
    )
}

export default Search