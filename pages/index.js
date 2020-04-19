import Layout from '../components/Layout';
import Link from 'next/link';
import { authinitialProps } from '../lib/auth';

export default function Index(props) {
    return (
        <Layout title="Home" {...props}>
            <Link href="/profile">
                <a>PROFILE</a>
            </Link>
        </Layout>
    )
}

Index.getinitialProps = authinitialProps();