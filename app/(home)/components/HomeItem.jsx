'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
    console.log('ID:', id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        //Detlating Item
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              })
            }
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
        className=' gap-3 grid grid-cols-1 md:grid-cols-3 w-full '
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
              className='flex flex-row  border-3 border-black gap-6 p-4'
            >
              <Image src={item.photo} width={100} height={200} alt='coffee' />
              <div>
                <h1 className='font-bold text-xl'>
                  Name: <span className='font-light'> {item.name}</span>
                </h1>
                <p>Prise:{item.Prise}</p>
                <span>Supplier: {item.supplier}</span>
                <div>
                  <button
                    className='btn mx-1'
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <Link
                    className='btn'
                    onClick={() => handleUpdate(item._id)}
                    href={`/updatecoffee/${item._id}`}
                  >
                    {/* <Link href={`/updatecoffee`}>up</Link> */}
                    Edit
                  </Link>
                  <Link href={`/itemdetails/${item._id}`} className='btn mx-2'>
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
