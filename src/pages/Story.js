import React from 'react'
import { Link } from 'react-router-dom'

import beninArt from '../assets/images/benin-art.png'
import { collections } from '../utils/api'

const Story = ({ match }) => {
  const {
    params: { storyId }
  } = match

  const collectionWithStory = collections.find((collection) => collection.inspiration.id === storyId)

  const story = collectionWithStory.inspiration
  return (
    <>
      <section className="px-9">
        <h1 className="text-5xl font-bold my-6 text-center">{story.title}</h1>
        <div className="h-auto w-auto">
          <img className="mx-auto" src={beninArt} alt="benin-art" />
        </div>
        {story.texts.map((text, i) => (
          <p key={i} className="my-4">
            {text}
          </p>
        ))}
      </section>
      <Link to={`/collections/${collectionWithStory.id}`} className="px-9 italic opacity-80">
        See beautiful collection we made from this story{' '}
        <span className="underline cursor-pointer hover:opacity-70 transition-all ease-in-out">here</span>
      </Link>
    </>
  )
}

export default Story
