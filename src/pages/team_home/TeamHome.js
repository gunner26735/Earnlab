import "./teamhome.css";

function TeamHome({ match, location }){
    const {
        params: { id }
      } = match;
    return(
        <div className="teamhome">
            <div className="detail ps-5 pt-3">
                <div className="ttitle"> 
                    Team Name
                </div>
                <div className="tmem"> 0Xasdsafasasfsaf 0xasdasfdjnfjdsnfjdn</div>
                <div className="donate pb-2 pe-5">
                    <button className="btn btn-primary">Donate Now!</button>
                </div>
            </div>
        </div>
    );
}

export default TeamHome;
