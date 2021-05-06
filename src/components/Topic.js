import React, {useEffect, useState} from 'react'

export const Topic = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const [topics, setTopics] = useState([]);

  const fetchData = async () => {
    const items = await fetch('http://localhost:4000/api/v1/topics');
    const topics = await items.json();
    setTopics(topics);
  }

  return (
    <div className="text-center">
      {topics.map(topic => (
          <button className="btn btn-outline-warning" key={topic.id}>{topic.title}</button>        
      ))}
    </div>
  )
}

export default Topic
