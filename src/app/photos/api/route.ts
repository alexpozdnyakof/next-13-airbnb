import { NextResponse } from 'next/server';
import swagPhotos, { Photo } from '../../../../photos'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const result = id ? getPhotoById(id) : swagPhotos


  return NextResponse.json(result);
}


function getPhotoById(searchId: string): Photo {
  return swagPhotos.find(({id}) => id === searchId)!
}