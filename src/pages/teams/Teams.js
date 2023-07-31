import "./team.css";
import { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { abi } from '../../contract/earnlab';
const ethers = require("ethers");

function Teams(){

    useEffect(()=>{
        console.log("CALLED!!!");
        getTeams();
    },[]);

    const [teamData, setTeamData] = useState();
    async function getTeams(){
        const contractAddress = '0xdBC8258CBe9B1915702fB31fFA0aC5F695bDA90b';
        const contractABI = abi;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractRead = new ethers.Contract(
            contractAddress,
            contractABI,
            provider
        );
        const teamSizeHex = await contractRead.TeamsCreated();
        const teamSize = parseInt(teamSizeHex._hex);
        var teamsNameContract = [];
        for(let i=1;i<=teamSize;i++){
            var team = await contractRead.getTeam(i);
            //console.log(team);
            teamsNameContract.push(["/team_home/id="+i,team[4]]);
        }
        setTeamData(teamsNameContract);
    }

    return (
        <div className='team'>
            {teamData && teamData.map((item) => (
                <Link to={item[0]}><p class="circle-singleline">{item[1]}</p></Link>
            ))}
        </div>
    );
}

export default Teams;