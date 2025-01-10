import './Meaning.css';

export default function Meaning(props) {
  const { meaning } = props;
  console.log(props.meaning);

  const firstDefinition = meaning.definitions && meaning.definitions[0];

  return (
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
 
           {firstDefinition && (
        <div>
          <p className='definition'>
            {firstDefinition.definition}
          </p>
          {firstDefinition.example && (
            <p className='example '>Ex.:
              {firstDefinition.example}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
