import React from 'react'

const InputBar = ({modify, adults, selectAdults, children, selectChildren, startDate, setStart, setEnd, endDate }) => {
    return (
        <div className="inputs-container" >
            <div className="inputs-bar" >
            <input value={startDate} onChange={setStart} className="form-control" type="date"/>
            <input value={endDate} onChange={setEnd} className="form-control" type="date"/>
            <select className="form-control" onChange={selectAdults} >
            {adults.map((person, i) => <option value={i}>{person}</option> )}
            </select>
            <select className="form-control" onChange={selectChildren} >
            {children.map((person, i) => <option value={i}>{person}</option> )}
            </select>
            <button type="button" onClick={modify} >Modify</button>
            </div>
        </div>
    )
}

export default InputBar
