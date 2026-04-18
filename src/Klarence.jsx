import './Klar.css'
import UAC from './UAC.jsx'

function Klarence() {
    return(
        <>
    <div>
        <h1 className ='myclass'>Hello World</h1>
    </div>
    <hr />
    <div>
        <UAC username="Klarence"/>
        <UAC>
            <h3>This is children</h3>
            <h4>Another line</h4>
        </UAC>
    </div>
    </>
    )
}
export default Klarence