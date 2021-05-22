import { PhotoProps } from "react-photo-gallery";
import{ extname } from "path";

export const getPhotos = (): PhotoProps[] => {
    let photos: PhotoProps[] = [];
    let files = require('fs').readdirSync(__dirname + '/img');

    files.forEach((file: string) => {
        if (['.jpg', '.png', '.img'].includes(extname(file))) {
            photos.push({
                src: `img/${file}`,
                width: 1,
                height:1
            });
    }});

    return photos;
}