import Link from 'next/link'
export default function Cta() {
    return (
      <div className='cta_flex' data-aos="fade-up" data-aos-duration="1200">
        <div className='sec_heading'>
            <h2>Transform Your MedTech and Pharma Operations with AI-Powered Insights</h2>
        </div>
        <div className='btn_blk text-right'>
            <Link href="/contact" className='site_btn dim'>Schedule Demo</Link>
        </div>
      </div>
    );
}