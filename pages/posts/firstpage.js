import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1> Hi my name is Suwoong Cho. </h1>
            <h2>I'm a student in Hanyang University.
                I am 23 years old and my major is information system.</h2>
            <h2>My hobby is watching movies alone and I love playing video games.</h2>    
            <h3>I am very honored to learn Computer Science.</h3>
            <Link href="/">Back to home</Link>
            <div>
                <a href="/script.html">나는 조수웅입니다</a>
            </div>
        </div>
    )
}