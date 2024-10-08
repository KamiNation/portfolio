import React, { ReactNode } from 'react'

interface Props {
    className?: string
    click?: () => void
    children: ReactNode
}



const Button: React.FC<Props> = ({ className, click, children }) => {
    return <button className={className} onClick={click}>{children} </button>
}

export default Button