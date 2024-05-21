import Link from 'next/link'
export default function Inform({data}) {
    return (
        <div className="flex rverse_flex">
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