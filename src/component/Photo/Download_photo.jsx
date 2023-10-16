export function download(event, image) {
    let href = event.currentTarget;
    href.setAttribute('download', 'photo');
    href.setAttribute('href', image);
}
