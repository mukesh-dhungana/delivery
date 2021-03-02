import React from 'react'

function Switch({
    value,
    checked,
    onChange,
}) {
    return (
        <div>
            <label class="switch">
                <input 
                    checked={checked}
                    onChange={onChange}
                    value={value}
                    type="checkbox" />
                <span class="switch-circle"></span>
            </label>
        </div>
    )
}

export default Switch
