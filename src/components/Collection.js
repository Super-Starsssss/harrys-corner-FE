import React, {useEffect, useState} from 'react'

export const Collection = () => {

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchData();
  }) 

  const fetchData = async () => {
    const data = await fetch('http://localhost:4000/api/v1/collections')
    const items = await data.json();
    setCollections(items);
  }


  return (
    <div className="text-center">
        {collections.map(collection => (
          <button className="btn btn-outline-primary" key={collection.id} >{collection.name}</button>
        ))}
    </div>
  )
}

export default Collection
