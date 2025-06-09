"use client"

import { toast } from "sonner"

const Toastifier = ({msg}: {msg: any}) => {
  return (
    toast(msg, {duration: 3000})
  )
}

export default Toastifier