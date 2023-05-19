import Photo from '@/components/frame'
import Modal from '@/components/modal'
import swagPhotos from '../../../../../photos'
import { Photo as PhotoType } from '../../../../../photos'
import { use } from 'react'

type RouteParams<T> = { params: T }

export default function PhotoModal({
	params: { id },
}: RouteParams<{ id: string }>) {
	const photo = use<PhotoType>(
		fetch(`http:/localhost:3000/photos/api?id=${id}`, {
			next: { revalidate: 60 },
		}).then(response => (console.log('revalidated'), response.json()))
	)

	return <Modal>{photo && <Photo photo={photo} />}</Modal>
}
