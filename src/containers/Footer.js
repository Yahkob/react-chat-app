import React from 'react'

const Footer = ()  => {
    return (
        <div>
            <div>Msg:
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                      return
                    }
                    dispatch(addMsg(input.value))
                    input.value = ''
                }}>
                    <input type="text"/>
                </form>
            </div>
            <div>Name: <form><input type="text"/></form></div>
        </div>
    )
}

export default Footer
