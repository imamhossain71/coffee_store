'use client'
import Swal from 'sweetalert2'

export default function AddCoffeePage() {
  const handleAddCoffee = (e) => {
    e.preventDefault()
    const form = e.target

    const newCoffee = new FormData(form)
    const coffeeData = Object.fromEntries(newCoffee.entries())
    console.log(coffeeData)

    //send data to server
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Successfully Added!',
            icon: 'success',
            draggable: true,
          })

          form.reset()
        }
      })
  }
  return (
    <div className='p-24'>
      <div className='p-24 text-center space-y-4'>
        <h1 className='text-6xl'>Add Items Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet,
          voluptatum doloremque quo voluptas cupiditate culpa asperiores porro
          quae labore neque sapiente rerum voluptate inventore quia earum sequi
          ab accusantium iure blanditiis! Neque at voluptas repudiandae optio
          pariatur reprehenderit omnis ut est obcaecati, consectetur placeat
          fugit dolor quasi id nulla.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Item Name</label>
            <input
              type='text'
              name='name'
              className='input w-full'
              placeholder='Enter Item Name'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Quantity</label>
            <input
              type='text'
              name='quantity'
              className='input w-full'
              placeholder='Enter Chef Name'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Taste</label>
            <input
              type='text'
              name='taste'
              className='input w-full'
              placeholder='Enter Coffee taste '
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Prise</label>
            <input
              type='text'
              name='Prise'
              className='input w-full'
              placeholder='Enter Category Name'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Details</label>
            <input
              type='text'
              name='details'
              className='input w-full'
              placeholder='Enter Coffee Details'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4'>
            <label className='label'>Supplier</label>
            <input
              type='text'
              name='supplier'
              className='input w-full'
              placeholder='Enter Supplier Name'
            />
          </fieldset>
        </div>
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6'>
          <label className='label'>Photo</label>
          <input
            type='text'
            name='photo'
            className='input w-full '
            placeholder='Enter Photo url'
          />
        </fieldset>
        <input type='submit' className='btn w-full' value='Add Coffee' />
      </form>
    </div>
  )
}
