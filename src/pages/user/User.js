import "./user.css";
import { useState } from "react";
import { abi } from '../../contract/earnlab';
const ethers = require("ethers");

function User() {
    //onst [indexId, setIndexId] = useState();

    async function getTeamMemberCount() {

        var tname = document.getElementById("rtname").value;
        var tmem = document.getElementById("rtmem").value;
        //console.log("OIIIII"+tname +" "+ tmem);
        var arr_tmem = tmem.split(",");

        //Connecting of Contract
        const contractAddress = '0xdBC8258CBe9B1915702fB31fFA0aC5F695bDA90b';
        const contractABI = abi;
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const contractRead = new ethers.Contract(
            contractAddress,
            contractABI,
            provider
        );
        const count = await contractRead.TeamsCreated();
        //console.log(count + " : Current Team");
    }

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
                                <span class="input-group-text" id="inputGroup-sizing-default">Team Name</span>
                                <input type="text" id="rtname" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Member's Addr. Seprated By ','</span>
                                <input type="text" id="rtmem" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={getTeamMemberCount}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;