import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
         <div className="top">
           <img src="https://imgs.search.brave.com/pw-iFxvWWPNXLVEcHxz-QiyqdZatr91Zby9NXatuKQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc" alt="" />
           <button>Save <Bookmark size={10} />\</button>
         </div>
         <div className="center">
           <h3>Amazon <span>5 days ago</span></h3>
           <h2>Seniot UI/UX Designer</h2>
           <div className='tag'>
            <h4>Part Time </h4>
            <h4>Senior level</h4>
           </div>
         </div>
         <div className="bottom">
          <h3> $120/hr </h3>
          <p>Mumbai, India </p>
          <button>Apply Now</button>
         </div>
      </div>
    </div>
  )
}

export default App
