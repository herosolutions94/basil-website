import Image from 'next/image';
import Link from 'next/link'
export default function Whitepaper({data, onFormClick}) {
   
    
    
    return (
        <div className="flex">
            {
                data.map((val,i) => {
                    return(
                        <div className="col" key={i} onClick={onFormClick}>
                            <div className="image">
                                <Image src={val.image} alt={val.title} width={600} height={600}/>
                            </div>
                            <h5>{val.title}</h5>
                        </div>
                    );
                })
            }
        </div>
    );
}