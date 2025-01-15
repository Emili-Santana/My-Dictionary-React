import './Meaning.css';
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const { meaning } = props;
 
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
         
            <p className='example '><strong>Example: </strong>
              {firstDefinition.example}
            </p>
            
            <Synonyms synonyms={props.meaning.synonyms} />
            </div>
            </>
    
      )}
    </div>
  );
}
