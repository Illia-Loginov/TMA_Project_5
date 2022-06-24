import updateObjectInArray from './updateObjectInArray.js';

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const getElements = (...selectors: string[]): HTMLElement[] => {
    return selectors.map(selector => {
        const element = document.querySelector(selector);

        if(!element) {
            throw new Error(`'${selector}' not found`);
        }

        return element as HTMLElement;
    })
}

const getPosts = async (url: string): Promise<Post[]> => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    return json;
}

const createPostSection = (post: Post): HTMLElement => {
    const section = document.createElement('section');

    const title = document.createElement('h2');
    title.textContent = post.title;
    section.appendChild(title);

    const body = document.createElement('p');
    body.textContent = post.body;
    section.appendChild(body);

    const info = document.createElement('small');
    info.textContent = `Post #${post.id} by User #${post.userId}`;
    section.appendChild(info);

    return section;
}

window.onload = async () => {
    try {
        const [ main, mainHeading ] = getElements('.main', '.main__heading');

        mainHeading.textContent = '...';

        const posts = await getPosts('https://jsonplaceholder.typicode.com/posts');

        const updatedPosts = updateObjectInArray<Post>(posts, 'id', 3, {
            title: 'Title of the updated 3rd post',
            body: 'Body of the updated 3rd post'
        })

        updatedPosts.map(post => {
            const section = createPostSection(post);

            main.appendChild(section);
        })

        mainHeading.textContent = 'Posts';
    } catch (error) {
        if(error instanceof Error) {
            alert(error.message);
        }
    }
}