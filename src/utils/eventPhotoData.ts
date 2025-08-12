export function eventPhotoData(numImages: number, path: string): string[] {
  const pathsWithFile = new Array<string>;
  for (let i = 0; i < numImages; i++) {
    pathsWithFile.push(`/${path}/Angklung${i}.jpeg`);
  }
  return pathsWithFile;
}