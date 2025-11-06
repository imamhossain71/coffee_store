'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function DetailsPage() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!id) return

    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [id])

  if (!data) {
    return <p className='text-center mt-10'>Loading...</p>
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Coffee Details</h1>
      <Image src={data.photo} alt={data.name} width={200} height={200} />
      <h2 className='text-xl mt-2'>Name: {data.name}</h2>
      <p>Price:$ {data.Prise}</p>
      <p>Supplier: {data.supplier}</p>
      <p className='mt-2'>Details: {data.details}</p>
    </div>
  )
}
