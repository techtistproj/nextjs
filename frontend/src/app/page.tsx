"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { userPages } from './store/actions/user_action';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {

  const initialState = { us_name: "", us_email: "", us_city: "" }
  const [details, setState] = useState(initialState);
  const dispatch=useDispatch<any>();
  
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
    console.log(details);
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const responce=await dispatch(userPages(details))
    console.log(responce);
    alert("Thank Your user Page ")
  }
  const getCourse=useSelector((state:any)=>state.userPage.getUsers);
  console.log(getCourse) 
  return (
         <div className='max-w-7xl container mx-auto lg:px-8'>
           <div className='text-center'>
                    <div className="bg-blue-200 min-h-screen flex items-center">
         <div className="w-full">
            <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="us_name" className="block mb-2 font-bold text-gray-600">Name</label>
                <input type="text" id="us_name" name="us_name" onChange={handleChange} placeholder="Enter in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>

              <div className="mb-5">
                <label htmlFor="us_email" className="block mb-2 font-bold text-gray-600">Email</label>
                <input type="email" id="us_email" name="us_email" onChange={handleChange} placeholder="enter in your email." className="border border-red-300 shadow p-3 w-full rounded mb-"/>
              </div>
                
              <div className="mb-5">
                <label htmlFor="us_city" className="block mb-2 font-bold text-gray-600">City</label>
                <input type="text" id="us_city" name="us_city" onChange={handleChange} placeholder="enter in your email." className="border border-red-300 shadow p-3 w-full rounded mb-"/>
              </div>
              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
            </form>
          </div>
          <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-center text-sm font-light">
            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
              <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Email</th>
                <th scope="col" className="px-6 py-4">City</th>
              </tr>
            </thead>
            <tbody>
              {getCourse.map((user: { us_id: React.Key | null | undefined; us_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; us_email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; us_city: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: number) => (
                <tr key={user.us_id} className="border-b dark:border-neutral-500">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.us_name}</td>
                  <td className="px-6 py-4">{user.us_email}</td>
                  <td className="px-6 py-4">{user.us_city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

        </div>
 </div>

 

           </div>
        </div>
  )
}
