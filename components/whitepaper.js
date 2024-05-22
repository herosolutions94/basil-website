import Link from 'next/link'
export default function Whitepaper({data}) {
   
    
    
    return (
        <div className="flex">
            {
                data.map((val,i) => {
                    return(
                        <div className="col" key={i}>
                            <div className="image">
                                <img src={val.image} alt={val.title}/>
                            </div>
                            <h5>{val.title}</h5>
                        </div>
                    );
                })
            }
        </div>
    );
}