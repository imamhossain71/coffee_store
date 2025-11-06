'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function HomeItem() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.deletedCount) {
              setData((prevData) => prevData.filter((item) => item._id !== id))

              Swal.fire({
                title: 'Deleted!',
                text: 'Your item has been deleted.',
                icon: 'success',
                timer: 1500,
              })
            }
          })
          .catch((error) => {
            console.error('Delete error:', error)
            Swal.fire('Error', 'Failed to delete item', 'error')
          })
      }
    })
  }

  const handleUpdate = (id) => {
    console.log('Update ID:', id)
  }

  return (
    <div className='flex w-full my-4'>
      <div
        className='gap-3 grid grid-cols-1 md:grid-cols-3 w-full'
        style={{
          backgroundImage: 'url(/assets/image/cobg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {Array.isArray(data) &&
          data.map((item) => (
            <div
              key={item._id}
              className='flex flex-row border-3 border-black gap-6 p-4 bg-white/70 rounded-lg shadow'
            >
              <Image
                src={item.photo}
                width={100}
                height={200}
                alt='coffee'
                className='rounded'
              />
              <div>
                <h1 className='font-bold text-xl'>
                  Name: <span className='font-light'>{item.name}</span>
                </h1>
                <p>Per Short: {item.Prise}</p>
                <p>Dalal: {item.supplier}</p>
                <div className='mt-2'>
                  <button
                    className='btn bg-red-500 text-white px-3 py-1 rounded mx-1'
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <Link
                    className='btn bg-blue-500 text-white px-3 py-1 rounded mx-1'
                    onClick={() => handleUpdate(item._id)}
                    href={`/updatecoffee/${item._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/itemdetails/${item._id}`}
                    className='btn bg-green-500 text-white px-3 py-1 rounded mx-1'
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
