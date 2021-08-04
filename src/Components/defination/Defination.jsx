import React from 'react'
import './defination.css';
const Defination = ({word ,select,meaning,lightMode}) => {
    return (
        <div className="meanings">
            {
                meaning[0] && word && select ==='en' &&
                (
                    <audio
                    src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
                    controls>
                        Your Browser doesn't support Audio element
                    </audio>
                )
            }
            {word ===""?
            (<span className="subTitle">Start by typing a word in search</span>)
            :(
                meaning.map((mean)=>
                    mean.meanings.map((item)=>
                        item.definitions.map((def)=>(
                            <div className="singleMean"
                            style={{backgroundColor:lightMode?"#3b5360":"white",
                            color:lightMode?"white":"black"
                        }}
                            >
                               <b> {def.definition}</b>

                                <hr />

                                {def.example && (
                                    <span>
                                        <b>Example : </b>
                                        {def.example}
                                    </span>
                                )}
                                    <br/>

                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms : </b>
                                        {def.synonyms.map((s)=>`${s}, `)}
                                    </span>
                                )}

                            </div>
                        )
                        
                    )                  
                
                )
            
            )
        )

        }
        </div>
    )
}

export default Defination
