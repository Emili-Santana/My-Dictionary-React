import './Photos.css';

export default function Photos(props){
    if (props.photos){
        return (
            <section className='Photos'>
                   <p className="title-photos"> <strong>Ilustration</strong></p>
                <div className='row'>
                {props.photos.map(function(photo,index){
                    return( 
                       
                    <div className='col-1' key={index}>
                      
                        <a href={photo.src.original} target='_blank' rel="noreferrer" >
                    <img 
                    src={photo.src.landscape} 
                    className='img-fluid' w-50
                    alt={`imagem ${index}`}
                    />
                    </a>
                    </div>
                    );
                })}
                </div>
            </section>
        ) ;
    } else {
        return null;
    }
}