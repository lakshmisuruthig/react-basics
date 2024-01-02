import "./CoreConcept.css";
function CoreConcept({image,title,description}){
    // return( --> by using props as a function parameter
    //     <li>
    //     <img src ={props.image} alt={props.title}/>
    //     <h3>{props.title}</h3>
    //     <p>{props.description}</p>
    //     </li>
    // );
  
    //By Using Object destructing
    return(
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );

}
export default CoreConcept;