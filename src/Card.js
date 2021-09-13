import "./card.css"

function Card(props)
{
  // Code below sets CSS styles (and adds correct icon in bkg through CSS)
  var btn1;var btn2 = "icon play";var btn3;
  if (props.Type =="Song"){btn1 = "icon add";btn3 = "icon queue"; }
  if (props.Type == "Album"){btn1 = "icon edit";btn3 = "icon delete"; }
        //Now moves onto actual card design
        return (
            <div style = {{height:"100%"}}>
            <section className = "bkg" style = {{height:"90%"}}>
            <div className = "AlbumArt">
                <div className="icon-row"> 
                  <button className = {btn1}/> 
                  <button className = {btn2}/> 
                  <button className = {btn3}/> 
            </div>
            </div>
            </section>
            <section style = {{height: "10%"}} style = {{fontFamily: "Roboto"}}>
            <h1>{props.Name}</h1>
            <p>{props.Artists}</p>
            </section>
            </div>
        );
}
      
export default Card;