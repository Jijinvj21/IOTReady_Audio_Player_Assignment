import './PageNotFound.scss'
import { Container } from 'react-bootstrap'

function PageNotFound() {
  return (
    <Container>
         <div className="page_not_found_component ">
        <div className="page_not_found_section  mx-auto p-5 ">
<h1 className='m-0'>404</h1>    
<p className='m-0'>NOT FOUND</p>  
<h5 className='m-0 pt-2'>The requested URL was not found on this server</h5>
  </div>
        </div>
    </Container>
  )
}

export default PageNotFound