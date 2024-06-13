import Image from 'next/image';
import './home.scss';

const HomePage = () => {
  return (
    <div className='home'>
       
        <div className="homeContent" id='home'>
            
            <div className="circle">
                <div className="imageContainer">
               
                    <Image src="/images/papaPass.png" priority sizes='50vw' fill alt=""/>
                </div>
            </div>
            <div className="content">
                <h1>
                    Feuyou emmanuel
                </h1>
                <h2>
                    12  juillet 1948 - 28 mai 2024
                </h2>
                <p>
                “ Ne pleurez pas, priez plutôt pour que Dieu
                ait  pour moi un regard miséricordieux “
                </p>

                <h3>
                Merci à la racine
                </h3>

            </div>
        </div>
    </div>
  )
}

export default HomePage