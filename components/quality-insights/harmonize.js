import Link from 'next/link'
export default function Harmonize({data}) {
    return (
        <div className="flex">
            <div className="tab_left">
                <div className="image">
                    <img src={data.image} alt={data.heading}/>
                </div>
            </div>
            <div className="tab_right">
                <h3>{data.heading}</h3>
                <div dangerouslySetInnerHTML={{__html: data.pera}} />
            </div>
        </div>
    );
}