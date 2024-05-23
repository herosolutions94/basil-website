import Link from 'next/link'
export default function ExecDashboard({data}) {
    return (
        <div className="inner_tabs_content">
        <div className="flex">
            <div className="tab_left">
                <div className="image">
                    <img src={data.image} alt={data.heading}/>
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