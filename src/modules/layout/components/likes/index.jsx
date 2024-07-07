"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Likes = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="relative inline-block mt-2">
      <FontAwesomeIcon
        icon={faHeart}
        size="24px"
        className="text-gray border border-gray-200 rounded-full p-3 mr-2"
        onClick={handleLike}
      />
      {likeCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {likeCount}
        </span>
      )}
    </div>
  );
};

export default Likes;