import './Meaning.css';
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const { meaning } = props;
  console.log(props.meaning);

  const firstDefinition =  meaning.definitions[0];

  return (
    
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
 
           {firstDefinition && (
            <>
        <div>

          <p className='definition'><strong>Definition: </strong>
            {firstDefinition.definition}
          </p>
         

          {firstDefinition.example && (//Only will render if there is an examplo available
            <p className='example '>
              <strong>Ex.: </strong>
              {firstDefinition.example}
            </p>
             )}

             <Synonyms synonyms={props.meaning.synonyms} />
           </div>
         </>
       )}
     </div>
   );
 }
