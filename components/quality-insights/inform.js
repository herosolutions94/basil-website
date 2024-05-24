import Link from 'next/link'
import Image from 'next/image';
export default function Inform({data}) {
    return (
        <div className="flex rverse_flex">
            <div className="tab_left">
                <div className="image">
                <Image src={data.image} alt={data.heading} width={700} height={400} priority/>
                </div>
            </div>
            <div className="tab_right">
                <h3>{data.heading}</h3>
                <div dangerouslySetInnerHTML={{__html: data.pera}} />
            </div>
        </div>
    );
}