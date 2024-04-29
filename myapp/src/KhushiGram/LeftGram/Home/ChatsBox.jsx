import React, { useContext } from 'react'
import { Apis } from "../../../KhushiGram";

const ChatsBox = () => {
    const Api = useContext(Apis)
    console.log('Api',Api)
  return (
    <div>
      {/* Hello */}
    </div>
  )
}

export default ChatsBox
