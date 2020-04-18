import Link from 'next/link'
export default () => {
    return(
    <div>
        {/* this link no refresh page and make a new html page and will use history */}
        <Link href="/">
            <a>go home page with next/link</a>
        </Link>
        <br/>
        {/* refresh page */}
        <a href="/">go home page with simple anchot tag</a>
        <h2>About</h2>
    </div>
    )
}