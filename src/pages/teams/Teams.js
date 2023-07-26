import "./team.css";


function Teams(){

    var a= ["XYZ","MERA ","BAAP","AMIR","HAI"];

    return(
        <div className='team'>
            {a.map((item)=>(
                <p class="circle-singleline">{item}</p>
            ))}
        </div>
    );
}

export default Teams;