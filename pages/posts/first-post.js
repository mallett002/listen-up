import Link from 'next/link';
import Head from'next/head';

import Layout from '../../components/layout';

const FirstPost = () => (
    <Layout>
        <Head>
            <title>first post!</title>
        </Head>
        <h1>First Post.</h1>
        <Link href='/'><a>Back to home.</a></Link>
    </Layout>
);

export default FirstPost;
