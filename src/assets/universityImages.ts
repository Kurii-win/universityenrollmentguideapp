const images = import.meta.glob(
'./*.{jpg,jpeg,png,webp}',
{
eager: true,
import: 'default',
}
) as Record<string, string>;


export function getUniversityImage(filename: string) {
return images[`./${filename}`];
}