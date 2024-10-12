import React, { ReactNode } from 'react'

interface Props {
    className?: string
    click?: () => void
    children: ReactNode
    id?: string
    disabled?: boolean
}



const Button: React.FC<Props> = ({ className, click, children, id, disabled }) => {
    return <button className={className} onClick={click} id={id} disabled={disabled} >{children} </button>
}

export default Button