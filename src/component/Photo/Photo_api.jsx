import React, { useState } from 'react';
import axios from 'axios';
import Math from 'react';
const Access_Key = `LEXuRb3CpHVI00NnRqlJjbIow0TF_2h9UDTklf9GJMA`;
export async function fetchRandomImage(search) {
    const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${Access_Key}&per_page=10`
    );
    const dataJ = await data.json();
    const images = dataJ.results;
    console.log(images[0].urls.small);
    if (images.length === 0) {
        throw new Error(`Изображения не найдены по запросу: ${search}`);
    }

    return images[0].urls.small;
}
