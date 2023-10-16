import React, { useState } from 'react';
import '../../style/Photo/Main.css';
import { fetchRandomImage } from './Photo_api';
import { download } from './Download_photo';
const Main = () => {
    const [image, setImage] = useState([]);
    const [search, setSearch] = useState('beach');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSearch(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const image = await fetchRandomImage(search);
            setImage(image);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="block">
            <form onSubmit={handleSearch}>
                <input
                    placeholder="Тема"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" disabled={isLoading}>
                    Запрос
                </button>
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {image && (
                <div>
                    <h2>{image.tags}</h2>
                    <img src={image} alt={image.tags} />
                    <a
                        id="a"
                        disabled={isLoading}
                        onClick={(event) => download(event, image)}
                    >
                        Загрузить изображение
                    </a>
                </div>
            )}
        </div>
    );
};
export default Main;
