import React from 'react'

const MiniHead = ({ text }) => {
  return (
    <span
            className="
              font-caps text-[0.7rem]
              uppercase tracking-[0.34em]
              text-[#d5a071]
            "
          >
             {text}
          </span>
  )
}

export default MiniHead