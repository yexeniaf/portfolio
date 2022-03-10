import reactLogo from '../images/reactLogo.png';
import htmlLogo from '../images/htmlLogo.png';
import cssLogo from '../images/cssLogo.png';
import javascriptLogo from '../images/javascriptLogo.png';
import rubyLogo from '../images/rubyLogo.png';
import railsLogo from '../images/railsLogo.png';
import expressLogo from '../images/expressLogo.png';
import postLogo from '../images/postLogo.jpg';
import mongoLogo from '../images/mongoLogo.png';
import bootstrapLogo from '../images/bootstrapLogo.png';
import tailwindLogo from '../images/tailwindLogo.png';
import resume from '../gifs/resume.gif'

export default function LogoIcons(props) {
  return (
    <div>
         <div className='bg-white mx-3 p-4 mb-12' >
          <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-4">
            <h1 className="items-title about-title block text-white text-border-2 xl:inline"> SKILLS:</h1>
          </div>
          <br/>
            <div>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <img className="logo-images border-4 " src={reactLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={htmlLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={cssLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={javascriptLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={rubyLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={railsLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={expressLogo}/>
                </div>    
                <div>
                  <img className="logo-images border-4 " src={postLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={mongoLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={bootstrapLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={tailwindLogo}/>
                </div>      
              </div>


            </div>
          </div>
    </div>
  )
}
