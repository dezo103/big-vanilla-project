import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const search = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name have been changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age have been changed ' + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus have been lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name="delete" onClick={search}>search</button>
        </div>
    )
}


