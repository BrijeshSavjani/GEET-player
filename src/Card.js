import "./card.css"

function Card()
{
        return (
            <div style = {{height:"100%"}}>
            <section className = "bkg" style = {{height:"90%"}}>
            <div className = "AlbumArt">
                <div className="icon-row"> 
                  <button class = "icon edit"/> 
                  <button class = "icon play"/> 
                  <button class = "icon delete"/> 
            

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