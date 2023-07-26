import "./user.css";


function User() {


    return (
        <div className='home'>

            <div className="title">
                <p>Start By a Click.</p>
                <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#teamModal">Create Team!</button>
                <a href='teams'><button className="btn btn-dark ms-4">View Team!</button></a>
            </div>
            <img src="Checklist.png" className='imgur'></img>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="teamModal" tabindex="-1" aria-labelledby="teamModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Team Creation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Addresses</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Reveal's Addr.</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Create</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default User;