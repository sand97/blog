import Template from '../../components/Template'
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React from "react";

function Index(props) {
    const router = useRouter();
    let current = {content  : {rendered : ""}} ;
    props.categories.forEach(function (item) {
        if(item.id ===  router.query.id * 1){
            current = item;
        }
    });

    return (
        <Template categories={props.categories} currentCategory={current.content.rendered}/>
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