import React from 'react'

function TodoForm({doSubmit}) {
    // const doSubmit = props.doSubmit
    console.log("render TodoForm")

    return (
        <>
            <h2>TodoForm</h2>

            <form onSubmit={doSubmit} >
                <div className="row mb-3">
                    <label htmlFor="todoTitle" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="todoTitle" name="todoTitle" />
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="todoCompleted" id="todoCompleted" />
                            <label className="form-check-label" htmlFor="todoCompleted">
                                Completed ?
        </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default React.memo(TodoForm)
