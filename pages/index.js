import Layout from '../components/Layout';
import Link from 'next/link';

export default function Index() {
    return (
        <Layout title="Home">
            <Link href="/profile">
                <a>PROFILE</a>
            </Link>
        </Layout>
    )
}