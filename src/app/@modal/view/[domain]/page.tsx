import Modal from '@/components/modal'

type RouteParams<T> = {params: T}

export default async function Page({params}: RouteParams<{domain: string}>){

  return (
    <Modal>
      <h1>Modal {params.domain}</h1>
    </Modal>
  )
}