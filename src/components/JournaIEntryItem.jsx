import React from "react"

export const JournalEntryItem = ({entry}) => {
    return (
        <section className="journal-entry-item">
            <figure className="entry-img">
                <img className="hidden" src={ entry.imageUrlOther } />
                <img src={ entry.imageUrl } />
            </figure>
            <div className="entry-content">
                <div className="entry-header">
                    <div className="entry-location">
                        <span className="entry-country">{ entry.location }</span>
                        <a className="entry-maps-link" href={ entry.googleMapsUrl } target="_blank">
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className="entry-name">{ entry.title }</h2>
                </div>
                <div className="entry-main">
                    <div className="entry-dates">
                        {entry.startDate != entry.endDate ? 
                            <span>{ entry.startDate } - { entry.endDate }</span> : 
                            <span>{ entry.startDate }</span> 
                        }
                    </div>
                    <p className="entry-blurb">{ entry.description }</p>
                </div>
            </div>
        </section>
    )
}