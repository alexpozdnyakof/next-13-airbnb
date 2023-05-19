import React, { use } from "react";
import Photo from "@/components/frame";
import swagPhotos from "../../../../photos";
import {Photo as PhotoType}  from "../../../../photos";

type RouteParams<T> = {params: T}

export default function PhotoPage({ params: { id } }: RouteParams<{id: string}>) {
  const photo = use<PhotoType>(fetch(`http:/localhost:3000/photos/api?id=${id}`).then(response => response.json()))

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Photo photo={photo} />
      </div>
    </div>
  );
}
