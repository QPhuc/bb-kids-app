import { useRouter } from 'next/router'
import React from 'react'

export default function Products() {
    const router = useRouter();
    const {productId} = router.query
    return (
        <div>Detail{productId}</div>
    )
}
