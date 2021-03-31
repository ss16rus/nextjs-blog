import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import getSortedPostsData from '../lib/posts'
import getSortedPostsData, { postsDirectory } from '../lib/posts'


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const posts = getSortedPostsData();

  console.log('getStaticProps', posts)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {posts}
  }
}


export default class FirstPage extends Component {

    constructor ( props ) {
        super(props);
        console.log('FirstPage constructor', props );
        this.posts = props.posts;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }


    render() {
        return (
            <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Layout>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <p>I'm learning next js ssr</p>
                </section>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    { this.posts.map(({title, date, id}) => (
                        <li key={id} className={utilStyles.listItem}>
                            <Link href={`/${id}`}>
                            {/* <Link href={`/${dir}/${id}`}> */}
                                <a>{date}</a>
                            </Link>
                            <br />{title}
                        </li>
                        )
                    )}
                </ul>
                <p>Powered by Serghey aka ss16rus 2021</p>
            </Layout>
            </>
        )
    }
}