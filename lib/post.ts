import axios from 'axios';
import { api,token } from '../utils/api';



export async function  getSortedPostsData() {
  const config = {
    headers: {
      token
    }
  }
  try {
    const res = await axios.get(api+'blog/discover/10', config);
    return res.data;
  } catch (error) {
    return [];
  }
}

export async function getAllPostSlugs() {
    const posts = await getSortedPostsData();
    const slugs:any = [];
    posts.data.map(({slug}:any) => {
        slugs.push({
          params: {
           slug
          }
        });
    });

    return slugs;
}

export async function getPostData(slug:any) {
  const config = {
    headers: {
      token
    }
  }
  try {
    const res = await axios.get(api+'blog/'+slug, config);
    return res.data.data;
  } catch (error) {
    return [];
  }
}