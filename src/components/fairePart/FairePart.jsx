import Image from 'next/image';
import  './fairePart.scss';

const FairePart = () => {
  return (
    <div className='fairePart' id='fairePart'>
        <h1>
            Faire part
        </h1>
        <div className="content">
            
            <div className="left">
            <ul>
                <li>Sa Majesté Fo’o Tchedje Papemsi Alain Roi des Bangam</li>
                <li>Sa Majesté Fo’o Tchouankam Dada Théodore  Roi des Batié</li>
                <li>
                    Sa Majesté Wambe Suffo (chef 3° Degré) à Djeugou (Batié)
                </li>
                <li>
                    La grande famille Wambe Sop Ngnekou à Bangam

                </li>
                <li>
                    La  grande famille Sop Nkem Medom à Batié

                </li>
                <li>
                    Mr et Mme Pelessouang Rigobert à Nkongsamba

                </li>
                <li>
                    Maman Yeumo Denise à Bangam

                </li>
                <li>
                    Maman Kapawo Kameni Victorine en Irlande

                </li>
                <li>
                    Maman Mefu Gienou Tchako Getrude en Belgique

                </li>
            </ul>
          
            </div>
            <div className="imageContainer">
                <Image src="/images/papaHome.png" width={1000} height={1000}  priority alt=''/>
            </div>
            <div className="right">
     
            <ul>
            <h3>Les enfants</h3>
                <li>Mme Migang Feuyou Valerie Edith à Douala</li>
                <li>Mr et Mme Tchangou Feuyou Eric Yves en Hollande
                </li>
                <li>
                    Mr et Mme Kameni Feuyou Colince en Finlande
                </li>
                <li>
                     Mr et Mme Ngnekou Feuyou Francis Merlin

                </li>
                <li>
                    Mr et Mme Kamgang Feuyou Marcel à Douala

                </li>
                <li>
                    Mr et Mme Feugang Feuyou Narcisse Gael en Allemagne

                </li>
                <li>
                    Mr Pele  Feuyou Alex à Douala

                </li>
                <li>
                    Maman Kapawo Kameni Victorine en Irlande

                </li>
                <li>
                    Mr Pele  Feuyou Alex à Douala
                </li>
                <li>
                    Mme Mieguem Feuyou Ernice Vanessa en France
                </li>
                <li>
                     Mr Tadja Henri Dumond à Yaoundé
                </li>
                <li>
                    Mr Feumo Feuyou Yan Landry en Russie
                </li>
               
            </ul>
            </div>
           
        </div>
            <p>
                Ont la profonde douleur de vous annoncer le décès de leur petit-fils, fils, époux, père, beaux père, grand-père, Mr Feuyou Emmanuel, survenu le mardi 28 mai 2024 à Bafoussam de suite de courte maladie.
            </p>
    </div>
  )
}

export default FairePart