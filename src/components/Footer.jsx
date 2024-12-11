import '../styles/Footer.css';
import { Google, Instagram, LinkedIn, Facebook} from '@mui/icons-material';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='webName'>
                <h1>DA.</h1>
            </div>
            <div className='LinksList'>
                <div>
                    <FindMe icon={<Google className='findmeIcons'/>} find="danieljohn9295@gmail.com"/>
                    <FindMe icon={<Instagram className='findmeIcons'/>} find="danny.john.7777"/>
                </div>
                <div>
                    <FindMe icon={<LinkedIn className='findmeIcons'/>} find="DANIEL JOHN"/>
                    <FindMe icon={<Facebook className='findmeIcons'/>} find="J Danny Jay"/>
                </div>
            </div>
        </div>
    )
}
function FindMe(props){
    return(
        <div className='_findme'>
            <div>{props.icon}</div>
            <li><a href="#">{props.find}</a></li>
        </div>
    )
}