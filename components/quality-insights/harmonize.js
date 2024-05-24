import Link from 'next/link'
import Image from 'next/image';
export default function Harmonize({data}) {
    return (
        <div className="flex">
            <div className="tab_left">
                <div className="image">
                <Image src={data.image} alt={data.heading} width={500} height={400} priority/>
                </div>
            </div>
            <div className="tab_right">
                <h3>{data.heading}</h3>
                <div dangerouslySetInnerHTML={{__html: data.pera}} />
            </div>
        </div>
    );
}