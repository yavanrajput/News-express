import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {


        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3" >
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{ left: '87%', zIndex: '1' }}>
                        {source}</span>
                    <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBpG0qGZZ_St8DB2BB-8R7bEzVvmVjUk9henLQR2TLLUM0LW-hVFjZ_C8bBhF6LtVgDc&usqp=CAU":imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target='_blank' className="btn btn-sm btn-danger">Read more... </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
