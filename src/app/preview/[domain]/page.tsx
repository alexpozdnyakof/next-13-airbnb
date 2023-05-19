type RouteParams<T> = {params: T}

export default async function Page({params}: RouteParams<{domain: string}>){

  return (
      <h1>{params.domain}</h1>
  )
}