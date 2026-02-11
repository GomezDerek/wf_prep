import React from 'react'
import { Link} from "react-router";

export default function Page2() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center">This is Page2</h1>
      <Link 
        className="bg-black hover:bg-gray-500 transition-color text-white rounded-md py-1 px-4"
        to="/page1"
      >
        {"Go to Page 1"}
      </Link>
    </div>
  )
}
