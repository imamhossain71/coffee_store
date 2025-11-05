'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function UpdateCoffee() {
  const { id } = useParams()
  const router = useRouter()
  const [data, setData] = useState({})

  // Fetch existing coffee data
  useEffect(() => {
    if (!id) return
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [id])

  const handleUpdateCoffee = (e) => {
    e.preventDefault()
    const form = e.target
    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      taste: form.taste.value,
      Prise: form.Prise.value,
      details: form.details.value,
      supplier: form.supplier.value,
      photo: form.photo.value,
    }

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
          Swal.fire({
            title: 'Updated!',
            text: 'Coffee item updated successfully.',
            icon: 'success',
          })
          router.push('/') // redirect to home page
        }
      })
  }

  return (
    <div className='p-24'>
      <div className='p-24 text-center space-y-4'>
        <h1 className='text-6xl'>Update Items Page</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Item Name</label>
            <input
              type='text'
              name='name'
              defaultValue={data.name}
              className='input w-full'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Quantity</label>
            <input
              type='text'
              name='quantity'
              defaultValue={data.quantity}
              className='input w-full'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Taste</label>
            <input
              type='text'
              name='taste'
              defaultValue={data.taste}
              className='input w-full'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Prise</label>
            <input
              type='text'
              name='Prise'
              defaultValue={data.Prise}
              className='input w-full'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Details</label>
            <input
              type='text'
              name='details'
              defaultValue={data.details}
              className='input w-full'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Supplier</label>
            <input
              type='text'
              name='supplier'
              defaultValue={data.supplier}
              className='input w-full'
            />
          </fieldset>
        </div>
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6'>
          <label className='label'>Photo</label>
          <input
            type='text'
            name='photo'
            defaultValue={data.photo}
            className='input w-full'
          />
        </fieldset>
        <input type='submit' className='btn w-full' value='Update Item' />
      </form>
    </div>
  )
}
