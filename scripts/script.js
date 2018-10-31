"use strict";

$(document).ready(() => {

    $.get("https://www.reddit.com/r/puppies/.json?limit=10").then((response) => {
        const postArray = response.data.children;
        console.log(postArray);
        for (let post of postArray) {
            $(".container").append(`
            <section class="post-card">
                <a href="https://www.reddit.com${post.data.permalink}" class="post-title">${post.data.title}</a>
                <img class="post-thumbnail" src="${post.data.thumbnail}">
                <p class="post-author">Author: ${post.data.author}</p>
                <p class="post-ups">Ups: ${post.data.ups}</p>
            </section>
            `);
        }
    })











});