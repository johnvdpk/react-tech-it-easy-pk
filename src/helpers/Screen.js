
export function ScreenSizes(sizesInInches) {
    const Sizes = [];

    for (const sizeInInches of sizesInInches) {
        const sizeInCm = (sizeInInches * 2.54).toFixed(0);
        const formattedSize = `${sizeInInches} inches (${sizeInCm}cm)`;
        Sizes.push(formattedSize);
    }

    const sizes =Sizes.join(' | ');

    return sizes;
}
