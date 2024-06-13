import Image from 'next/image';
import './biographie.scss';

const Biographie = () => {
  return (
    <div className='biographie'>
        <h1>
         Biographie
        </h1>
        <div className="top">
            <p>
            Né le 12  juillet 1948 à Bangam, <br />
            de feu Wambe Sop Ngnekou et  de feu Tchouongouang Cécile.
            <br />
            Laisse plusieurs épouses,  plusieurs enfants,  petits fils et filles.
            </p>
            <div className="content">
                <h2>
                Parcours academique 
                </h2>
                <ul>
                    <li>
                        Ecole primaire et  publique de Bangam (chefferie)
                    </li>
                    <li>
                        Government primary school Buea
                    </li>
                    <li>
                        Government high school Tiko
                    </li>
                </ul>
            </div>

            <div className="content">
                <h2>
                Vie professionnelle
                </h2>
                <ul>
                    <li>
                    Commerçant marché congo de Douala

                    </li>
                    <li>
                    Importateur de montre

                    </li>
                    <li>
                    Homme d’affaire
                    </li>
                </ul>
            </div>

            <div className="content">
                <h2>
                Vie sociale
                </h2>
                <ul>
                    <li>
                         Membre de danse Keuna
                    </li>
                    <li>
                        Membre de l’association des élites Bangam
                    </li>
                    <li>
                        Membre de l’Association des élites Bateufang de Bangam
                    </li>
                    <li>
                        Membre de l’association Clan d’âges à Bangam
                    </li>
                </ul>
            </div>
        </div>
        <Image width={1000} height={1000} priority src="/images/papa_emma.png" alt=''/>
    </div>
  )
}

export default Biographie