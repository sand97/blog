import Template from '../components/Template'
import fetch from 'isomorphic-unfetch';
import React from "react";

function Index(props) {
    return (
        <Template categories={props.categories} currentCategory={props.categories[0].content.rendered}/>
    );
};

Index.getInitialProps = async function () {
    const res = await fetch('https://www.themehorse.com/preview/newscard/wp-json/wp/v2/posts?_embed');
    const data = await res.json();

    return {
        categories: data
    };
};
export default Index;