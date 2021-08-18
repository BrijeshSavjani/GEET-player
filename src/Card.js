import "./card.css"
function Card()
{
        return (
            <div style = {{height:"100%"}}>
            <section className = "bkg" style = {{height:"90%"}}>
            <div className = "AlbumArt">
                <div className="icon-row"> 
                    <svg xmlns="http://www.w3.org/2000/svg"  className="icon" viewBox="0 0 24 24">
                        <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
                    </svg>
                      <svg xmlns="http://www.w3.org/2000/svg"  className="icon" viewBox="0 0 24 24">
                        <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                      </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg"  className="icon" viewBox="0 0 24 24">
                        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                      </svg>
                </div>
            </div>
            </section>
            <section style = {{height: "10%"}} style = {{fontFamily: "Roboto"}}>
            <h1>Song name</h1>
            <p>Artist name</p>
            </section>
            </div>
        );
}
      
export default Card;