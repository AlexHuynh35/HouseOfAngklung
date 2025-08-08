export function eventPhotoData(selectedImages: number[], path: string): string[] {
  return selectedImages.map(num => {
    const paddedNum = String(num).padStart(5, "0");
    return `/${path}/Angklung${paddedNum}.jpeg`;
  });
}