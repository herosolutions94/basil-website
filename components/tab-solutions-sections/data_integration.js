import Link from 'next/link'
import Image from 'next/image';
export default function DataIntegration({data}) {
    return (
        <div className="inner_tabs_content">
        <div className="flex">
            <div className="tab_left">
                <div className="image">
                <Image src={data.image} alt={data.heading} width={700} height={700} priority/>
                </div>
            </div>
            <div className="tab_right">
                <h4>{data.heading}</h4>
                <h5>{data.sub_heading}</h5>
                <div dangerouslySetInnerHTML={{__html: data.pera}} />
                <div className="btn_blk">
                    <Link href={data.link} className="site_btn">{data.button_lbl}</Link>
                </div>
            </div>
        </div>
        </div>
    );
}