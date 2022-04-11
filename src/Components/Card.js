export default function Card(props){
    let {name, username, phone, website} = props.persona;
    console.log(props.persona)
    
        return(
    <div>
    
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="phone">{phone}</h6>
        <p className="website">{website}</p>
      </div>
    </div>
    
    
    </div>
        );
    }